
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CompanyCard from './components/CompanyCard';


import { db } from './firebaseConfig'; 
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'; 

function App() {
  const [companies, setCompanies] = useState([]);
  const [showShortlistedOnly, setShowShortlistedOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companiesCollectionRef = collection(db, 'companies'); 
        const querySnapshot = await getDocs(companiesCollectionRef); 
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data(), 

          isShortlisted: doc.data().isShortlisted || false
        }));
        setCompanies(data);
      } catch (e) {
        console.error("Failed to fetch companies from Firebase:", e);
        setError("Failed to load company listings. Please check console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []); 

  const toggleShortlist = async (id) => {
    const companyToUpdate = companies.find(company => company.id === id);
    if (!companyToUpdate) return;

    const newShortlistedStatus = !companyToUpdate.isShortlisted;

    try {
     
      setCompanies(prevCompanies =>
        prevCompanies.map(company =>
          company.id === id
            ? { ...company, isShortlisted: newShortlistedStatus }
            : company
        )
      );

      const companyDocRef = doc(db, 'companies', id);
      await updateDoc(companyDocRef, { isShortlisted: newShortlistedStatus });

    } catch (e) {
      console.error("Failed to update shortlist status in Firebase:", e);
      setError("Failed to update shortlist status. Please check your Firebase rules.");

      setCompanies(prevCompanies =>
        prevCompanies.map(company =>
          company.id === id
            ? { ...company, isShortlisted: !newShortlistedStatus } 
            : company
        )
      );
    }
  };


  const toggleShortlistFilter = () => {
    setShowShortlistedOnly(prev => !prev);
  };

  const displayedCompanies = showShortlistedOnly
    ? companies.filter(company => company.isShortlisted)
    : companies;

  if (loading) {
    return (
      <div className="app-container">
        <Header />
        <Navigation
          isShortlistFilterActive={showShortlistedOnly}
          onToggleShortlistFilter={toggleShortlistFilter}
        />
        <div className="loading-message">Loading listings from Firebase...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <Header />
        <Navigation
          isShortlistFilterActive={showShortlistedOnly}
          onToggleShortlistFilter={toggleShortlistFilter}
        />
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <Navigation
        isShortlistFilterActive={showShortlistedOnly}
        onToggleShortlistFilter={toggleShortlistFilter}
      />
      <div className="company-list">
        {displayedCompanies.length > 0 ? (
          displayedCompanies.map(company => (
            <CompanyCard
              key={company.id}
              company={company}
              backgroundColor={company.backgroundColor}
              isShortlisted={company.isShortlisted}
              onToggleShortlist={() => toggleShortlist(company.id)}
            />
          ))
        ) : (
          <div className="no-listings-message">No listings found.</div>
        )}
      </div>
    </div>
  );
}

export default App;
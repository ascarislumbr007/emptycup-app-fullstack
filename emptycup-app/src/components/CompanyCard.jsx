// src/components/CompanyCard.jsx
import React from 'react';
import './CompanyCard.css';
import {
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaEyeSlash,
  FaPhoneAlt,
  FaExclamationCircle,
  FaClipboard,
  FaHeart, // Import filled heart
  FaRegHeart // Import outlined heart
} from 'react-icons/fa';

function CompanyCard({ company, backgroundColor, isShortlisted, onToggleShortlist }) { // Accept new props
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="star-icon filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="company-card" style={{ backgroundColor: backgroundColor }}>
      <div className="card-main-content">
        <div className="card-header">
          <h2 className="company-name">{company.name}</h2>
          <div className="star-rating">{renderStars(company.rating)}</div>
          <p className="company-description">{company.description}</p>
        </div>

        <div className="company-stats">
          <div className="stat-item">
            <span className="stat-value">{company.projects}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{company.years}</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{company.price}</span>
            <span className="stat-label">Price</span>
          </div>
        </div>

        <div className="phone-numbers">
          {company.phoneNumbers.map((number, index) => (
            <a key={index} href={`tel:${number}`} className="phone-number">
              {number}
            </a>
          ))}
        </div>
      </div>

      <div className="card-actions">
        <div className="action-item">
          <FaArrowRight className="action-icon" />
          <span className="action-text">Details</span>
        </div>
        <div className="action-item">
          <FaEyeSlash className="action-icon" />
          <span className="action-text">Hide</span>
        </div>
        {/* Shortlist button with toggle functionality */}
        <div className="action-item" onClick={onToggleShortlist}>
          <span className="action-icon shortlist-icon">
            {/* Conditional rendering of heart icon */}
            {isShortlisted ? (
              <FaClipboard className="clipboard-icon" />
            ) : (
              <FaClipboard className="clipboard-icon" />
            )}
            {isShortlisted ? (
              <FaHeart className="heart-small filled" /> // Filled heart if shortlisted
            ) : (
              <FaRegHeart className="heart-small outlined" /> // Outlined heart if not
            )}
          </span>
          <span className="action-text">Shortlist</span>
        </div>
        <div className="action-item">
          <FaPhoneAlt className="action-icon" />
          <span className="action-text">Call</span>
        </div>
        <div className="action-item">
          <FaExclamationCircle className="action-icon" />
          <span className="action-text">Report</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
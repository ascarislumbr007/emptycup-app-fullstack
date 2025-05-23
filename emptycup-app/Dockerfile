# emptycup-app/Dockerfile

# Stage 1: Build the React application
FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the static files with a lightweight web server (e.g., Nginx or directly from build)
# For Vite, the build output is static, so we can serve it using a simple static server or Nginx
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
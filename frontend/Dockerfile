# Stage 1: Build the React frontend
FROM node:14.17.0-alpine as frontend-builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Create the final frontend image
FROM nginx:1.21.0-alpine

# Copy the built frontend code from the frontend-builder stage
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

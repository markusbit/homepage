# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files to the working directory
COPY . .

# Expose port 80 for the backend server
EXPOSE 5000

# Start the backend server
CMD [ "npm", "start" ]

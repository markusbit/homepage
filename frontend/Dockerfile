# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files to the working directory
COPY . .

# Build the frontend app
RUN npm run build

# Expose port 80 for the frontend server
EXPOSE 80

# Start the frontend server
CMD [ "npm", "start" ]

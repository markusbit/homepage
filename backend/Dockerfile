# Use the official Node.js 14.17.0-alpine image as the base
FROM node:14.17.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port
EXPOSE 3000

# Set the entrypoint command
CMD [ "npm", "start" ]

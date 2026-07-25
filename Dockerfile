# Use Node.js 22 Alpine image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project
COPY . .

# Expose application port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
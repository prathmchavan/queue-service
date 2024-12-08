# Use an official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY . .

# Expose the port for the API server
EXPOSE 8000

# Default command (when running as API)
CMD ["node", "server.js"]

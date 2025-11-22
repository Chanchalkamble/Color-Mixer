# Use Node LTS
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json first (for caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the project
COPY . .

# Expose port 8080 for Cloud Run
EXPOSE 8080
# Start server
CMD ["npm", "start"]

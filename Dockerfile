# Use Node.js 16 as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies using --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code into the container
COPY . .

# Build the application
# RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]

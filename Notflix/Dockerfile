# Step 1: Build the Angular app
FROM node:18 AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Debugging: Verify build output
RUN ls -l /usr/src/app/dist/notflix
RUN ls -l /usr/src/app/dist/notflix/browser

# Step 2: Serve with Nginx
FROM nginx:alpine

# Set Cloud Run required PORT
ENV PORT=8080

# Expose port 8080 (Cloud Run expects this)
EXPOSE 8080

# Copy the built Angular files into Nginx
COPY --from=build /usr/src/app/dist/notflix/browser /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

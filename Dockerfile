# Bug: Using outdated Node version
FROM node:14

# Bug: Running as root user (security issue)
WORKDIR /app

# Bug: Copying everything including node_modules
COPY . .

RUN npm install

# Bug: No health check defined
EXPOSE 3000

CMD ["npm", "start"]

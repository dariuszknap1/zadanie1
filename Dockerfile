FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install express
COPY server.js .
CMD ["npm", "start"]
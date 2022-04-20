#Plik stworzony przez Dariusz Knap
FROM node:alpine

WORKDIR /usr/src/app

#zainstalowanie zależności
COPY package*.json .
RUN npm install express

#skopiowanie pliku ze stroną internetową
COPY server.js .

#uruchomienie serwera
CMD ["npm", "start"]
FROM node:alpine

# skopiowanie lokalnych plików do wnętrza kontenera
COPY . .

RUN ECHO "Dariusz Knap"

# zainstalowanie zależności
WORKDIR /client
RUN npm install --silent

# bez tego nie działa
ENV CI=true

CMD ["npm","start"]
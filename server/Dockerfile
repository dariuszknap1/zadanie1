FROM node:alpine
COPY . .

RUN ECHO "Dariusz Knap"

# Installing dependencies
WORKDIR /server
RUN npm install --silent

EXPOSE 2000

CMD ["npm","start"]
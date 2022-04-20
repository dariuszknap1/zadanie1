FROM node:alpine
COPY . .

RUN echo "Dariusz Knap"

# Installing dependencies
WORKDIR /server
RUN npm install --silent

EXPOSE 2000

CMD ["npm","start"]

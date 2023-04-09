FROM node:current-alpine

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8800

CMD ["npm", "start"]
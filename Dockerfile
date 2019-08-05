FROM node:dubnium-alpine

WORKDIR /app

RUN apk update && apk add --no-cache bash

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]

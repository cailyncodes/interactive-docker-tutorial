FROM node:12

EXPOSE 8080

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "server.js"]
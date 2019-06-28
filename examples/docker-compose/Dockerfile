FROM node:8

EXPOSE 8080

WORKDIR /usr/app

COPY src/package.json .

RUN npm install

COPY src/ .

CMD ["node", "server.js"]
FROM alpine:latest

RUN apk add nodejs npm

RUN node --version

WORKDIR /dev-app-1

COPY package*.json build /dev-app-1/

RUN npm install

RUN npm run build

RUN npm run start

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["./app.js"]
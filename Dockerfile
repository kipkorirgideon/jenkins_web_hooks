FROM alpine:latest

RUN apk add nodejs npm

WORKDIR /dev-app-1

COPY package*.json build /dev-app-1/

RUN npm install


EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["./app.js"]
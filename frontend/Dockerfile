# Use the official Node.js image.
FROM node:18-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY . .

RUN npm install next -g

EXPOSE 3000

CMD ["next", "dev"]
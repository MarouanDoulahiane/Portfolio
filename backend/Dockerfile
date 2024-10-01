FROM node:22-bullseye

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm install && npm run start:dev"]
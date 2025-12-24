FROM --platform=linux/arm64 node:20 AS build

WORKDIR /app

COPY package*.json ./

ARG NPM_TOKEN

RUN echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" > ~/.npmrc

RUN npm install

COPY . .

RUN npm run build

# syntax=docker/dockerfile:1
FROM node:19-alpine
WORKDIR /code
RUN apk add --no-cache npm
COPY package.json package.json
RUN npm i
EXPOSE 5000
COPY . .
CMD ["npm", "start"]

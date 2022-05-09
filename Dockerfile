FROM node:14-alpine AS builder
WORKDIR "/app"
COPY . .
WORKDIR "/app"
CMD [ "sh", "-c", "yarn  run start"]
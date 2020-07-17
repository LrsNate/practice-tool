FROM node:12-alpine
WORKDIR /target
COPY . .
RUN yarn build

FROM nginx
COPY build /usr/share/nginx/html

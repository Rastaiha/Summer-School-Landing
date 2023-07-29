FROM node:12-alpine as build
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build


FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
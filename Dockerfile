FROM node:latest as build
WORKDIR /app
COPY ./package.json ./
RUN yarn --production
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN yarn run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
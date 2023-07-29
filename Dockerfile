FROM node:latest as build
WORKDIR /app
COPY ./package.json ./
RUN yarn --production
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN yarn run build


FROM nginx:latest as production
COPY --from=build /app/build /var/www/public
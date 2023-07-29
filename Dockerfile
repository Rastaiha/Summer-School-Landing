FROM node:latest as build
WORKDIR /app
COPY ./package.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
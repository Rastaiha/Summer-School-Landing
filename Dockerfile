FROM node:18 as build
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
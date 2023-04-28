# node configuration
FROM node:16-alpine as vite

WORKDIR /react-vite-app

COPY ./dist .
COPY ./package.json .

RUN npm install

#nginx configuration

FROM nginx:1.23.4-alpine
COPY --from=vite /react-vite-app/dist /usr/share/nginx/html
RUN rm /etc/nginx.conf /etc/nginx/conf.d
COPY nginx.conf /etc/ngnx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]



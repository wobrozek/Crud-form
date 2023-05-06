# node configuration
FROM node:16-alpine as vite

WORKDIR /react-vite-app

COPY /dist/. ./dist
COPY ./package.json .

RUN npm install

#nginx configuration    

FROM nginx:1.23.4-alpine
COPY --from=vite /react-vite-app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 8001

CMD ["nginx","-g","daemon off;"]



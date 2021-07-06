FROM nginx:1.21-alpine

COPY nginx.vh.conf /etc/nginx/conf.d/default.conf
COPY . /multi-app

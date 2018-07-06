FROM nginx:alpine

COPY nginx.vh.conf /etc/nginx/conf.d/default.conf
COPY . /multi-app

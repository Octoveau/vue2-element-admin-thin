FROM nginx
COPY dist/ /usr/share/nginx/html/vue2-template
COPY bin/default.conf /etc/nginx/conf.d/default.conf
COPY bin/nginx.conf /etc/nginx/nginx.conf
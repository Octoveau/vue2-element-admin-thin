FROM nginx
COPY dist/ /usr/share/nginx/html/vue2-template
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
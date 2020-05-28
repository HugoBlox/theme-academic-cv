FROM nginx:alpine

LABEL Author="WuShaoling(wsl6@outlook.com)"
LABEL Owner="X-lab(x-lab.info)"

ADD public /usr/share/nginx/html
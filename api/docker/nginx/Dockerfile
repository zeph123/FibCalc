ARG ALPINE_VERSION=3.17.0

FROM alpine:${ALPINE_VERSION}

RUN apk update && apk upgrade \
    && apk add --no-cache nginx

COPY /docker/nginx/nginx.conf /etc/nginx/

EXPOSE 8080
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
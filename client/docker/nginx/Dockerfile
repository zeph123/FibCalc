ARG NODE_VERSION=19.3.0
ARG ALPINE_VERSION=3.17.0

FROM node:${NODE_VERSION}-alpine AS builder

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR '/app'

COPY . .

RUN npm install && npm run build

FROM alpine:${ALPINE_VERSION}

RUN apk update && apk upgrade \
    && apk add --no-cache nginx

COPY /docker/nginx/nginx.conf /etc/nginx/
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
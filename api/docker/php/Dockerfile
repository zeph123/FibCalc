ARG PHP_VERSION=8.0.26

FROM php:${PHP_VERSION}-fpm-alpine

COPY /docker/php/php.ini /usr/local/etc/php/

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/app
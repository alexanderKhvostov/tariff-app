FROM postgres:14.1

WORKDIR /var/lib/postgresql/tariff

RUN mkdir dumps

RUN chmod -R 777 dumps

COPY docker/dev/db/postgres-init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_PASSWORD 'root'

EXPOSE 5437

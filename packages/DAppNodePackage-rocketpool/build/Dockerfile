FROM node:18.15.0-alpine as build-api
WORKDIR /app/ui
COPY ui .
RUN yarn && yarn build

WORKDIR /app/api
COPY api .
RUN yarn && yarn build

FROM node:18.15.0
ARG UPSTREAM_VERSION

WORKDIR /app

RUN wget "https://github.com/rocket-pool/smartnode-install/releases/download/${UPSTREAM_VERSION}/rocketpool-cli-linux-amd64" -O /usr/local/bin/rocketpool
RUN wget "https://github.com/rocket-pool/smartnode-install/releases/download/${UPSTREAM_VERSION}/rocketpool-daemon-linux-amd64" -O /usr/local/bin/rocketpoold

RUN chmod +x /usr/local/bin/rocketpool
RUN chmod +x /usr/local/bin/rocketpoold

RUN apt-get update && apt-get -y install gettext supervisor curl nginx
RUN useradd -s /bin/false nginx

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

COPY --from=build-api /app/api /app/api
COPY --from=build-api /app/ui/build /usr/share/nginx/html

COPY supervisord.conf /etc/supervisord/supervisord.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY user-settings_template.yml /app/rocketpool/user-settings_template.yml
COPY rocketpool-start.sh /usr/local/bin/rocketpool-start.sh
COPY validator-restart.sh /usr/local/bin/validator-restart.sh
COPY validator-stop.sh /usr/local/bin/validator-stop.sh
RUN chmod +x /usr/local/bin/rocketpool-start.sh
RUN chmod +x /usr/local/bin/validator-restart.sh
RUN chmod +x /usr/local/bin/validator-stop.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

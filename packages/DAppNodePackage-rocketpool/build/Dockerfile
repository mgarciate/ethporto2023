FROM node:18.15.0-alpine as build-api

WORKDIR /app/api
COPY api .
RUN yarn
RUN yarn build

FROM node:18.15.0
ARG UPSTREAM_VERSION

WORKDIR /app

RUN wget "https://github.com/rocket-pool/smartnode-install/releases/download/${UPSTREAM_VERSION}/rocketpool-cli-linux-amd64" -O /usr/local/bin/rocketpool
RUN wget "https://github.com/rocket-pool/smartnode-install/releases/download/${UPSTREAM_VERSION}/rocketpool-daemon-linux-amd64" -O /usr/local/bin/rocketpoold

RUN chmod +x /usr/local/bin/rocketpool
RUN chmod +x /usr/local/bin/rocketpoold

RUN apt-get update && apt-get -y install gettext supervisor

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

COPY --from=build-api /app/api /app/api

COPY supervisord.conf /etc/supervisord/supervisord.conf

COPY user-settings_template.yml /app/rocketpool/user-settings_template.yml
COPY start-rocketpool.sh /usr/local/bin/start-rocketpool.sh
RUN chmod +x /usr/local/bin/start-rocketpool.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

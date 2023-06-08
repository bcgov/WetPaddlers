FROM artifacts.developer.gov.bc.ca/docker-remote/node:18-alpine as builder

# set variables
ENV HOME=/build

# create source directory
RUN mkdir -p $HOME
WORKDIR $HOME

# Bundle app source
COPY ./ .

RUN npm install
RUN npm run build

FROM artifacts.developer.gov.bc.ca/docker-remote/caddy:2.6.4
COPY --from=builder /build/Caddyfile /etc/caddy
COPY --from=builder /build/dist/ /srv/

FROM node:18-alpine
USER 1001

RUN apk update && apk add curl

# set variables
ENV HOME=/opt/app-root

# create source directory
RUN mkdir -p $HOME
WORKDIR $HOME

# Bundle app source
COPY ./ .
WORKDIR /opt/app-root/wetpaddle

RUN pwd
RUN ls -l
RUN rm -rf node_modules
run npm install

VOLUME ${HOME}

ENV PATH ${HOME}/node_modules/.bin/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
# run the ionic app in reload mode (will reload on file changes)

RUN chgrp -R 0 * && \
    chmod -R g=u *

RUN chown -R 1001:0 *


EXPOSE 5173:5173
CMD [ "npm", "run", "oc"]
EXPOSE 5173:5173
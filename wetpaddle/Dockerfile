FROM node:18-alpine

RUN apk update && apk add curl

# set variables
ENV HOME=/opt/app-root

# create source directory
RUN mkdir -p $HOME
WORKDIR $HOME

# Bundle app source
COPY ./ .
WORKDIR /opt/app-root/wetpaddle

RUN rm -rf node_modules
RUN npm install
RUN chgrp -R 0 .
RUN chmod -R g+w .

VOLUME ${HOME}

ENV PATH ${HOME}/node_modules/.bin/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH

EXPOSE 5173:5173
CMD [ "npm", "run", "oc"]

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

RUN pwd
RUN ls -l
RUN rm -rf node_modules
run npm install

VOLUME ${HOME}

ENV PATH ${HOME}/node_modules/.bin/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
# run the ionic app in reload mode (will reload on file changes)
RUN chmod -R a+rwX .
RUN chown -R 1001:1001 .

USER 1001

EXPOSE 5173:5173
CMD [ "npm", "run", "oc"]
EXPOSE 5173:5173
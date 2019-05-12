# Specifies the base image we're extending
FROM node:10.14.0
MAINTAINER Said EL FAZNI <elfazni@gmail.com>

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY . .
EXPOSE 3000
#Start app
CMD ["npm", "run-script", "start"]

# Dockerfile
FROM node:8

# Install global packages
RUN npm i pm2 -g

# Set yarn config
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
RUN yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ -g

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json ./yarn.lock /usr/src/app/
RUN yarn install --production

# Copy app bundle files
COPY ./lib/ /usr/src/app/lib/
COPY ./build/ /usr/src/app/build/

# Copy PM2 configuration file
COPY ./pm2.config.js /usr/src/app/

# Copy enviroment configuration files
COPY ./config/env.js ./config/paths.js /usr/src/app/config/
COPY ./.env* /usr/src/app/

EXPOSE 3000

# defined in package.json
CMD [ "yarn", "start" ]
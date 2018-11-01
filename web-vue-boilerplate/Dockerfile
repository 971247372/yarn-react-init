# node 8 lts
FROM node:carbon
# set nodes-sass mirror
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
RUN npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

WORKDIR /app

COPY . .

# bootstrap all packages
RUN npm run bootstrap

# build app-admin
WORKDIR /app/packages/app-admin
RUN npm rebuild node-sass
RUN npm run build

WORKDIR /app

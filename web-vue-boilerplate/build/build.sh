#!/usr/bin/env bash
set -e

red='\e[21;31m%s\e[0m\n'
green='\e[21;32m%s\e[0m\n'
yellow='\e[21;33m%s\e[0m\n'
blue='\e[21;34m%s\e[0m\n'
magenta='\e[21;35m%s\e[0m\n'
cyan='\e[21;36m%s\e[0m\n'
white='\e[21;97m%s\e[0m\n'

### ------------------------------------
### CONFIG
### ------------------------------------
DOCKER_TAG=lean-bi/projectname   # namespace/app-name
DOCKER_VER=latest  # version
DIST_DIR=${PWD}/dist
DOCKER_DEBUG=''
#DOCKER_DEBUG=--quiet           # uncomment this to supress docker build output

printf "$yellow" "[1/2] >> build docker container with tag: $DOCKER_TAG:$DOCKER_VER"
printf "$white" "===================================="
docker build ${DOCKER_DEBUG} -t  ${DOCKER_TAG}:${DOCKER_VER} .

printf "$green" "[2/2] >> Coping static file to $DIST_DIR"
printf "$white" "===================================="
docker run --rm -i --volume=${DIST_DIR}:/vol ${DOCKER_TAG}:${DOCKER_VER} sh << COMMANDS
cp -R packages/app-admin/dist /vol/app-admin
COMMANDS

printf "$green" "done✨"

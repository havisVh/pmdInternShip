# Docker First Steps
#### 10/08/2024

## Aim
> to setup a docker container to run a webpage


## Progress:
- The app was setup using node.js and the express library
- The docker image uses node base image
- check [dockerfile](./dockerfile) for more details

## How to?

1. Building the docker image

    `docker build -t ffs ./dockerfile`

    > -t flag is for giving name to the dockerimage

    _nb: the command is relative to this readme_


2. Running the container

    `docker run -it -p 6869:6336 ffs`

    > -i and -t (used here as -it) keeps the STDIN open and allows us to interact with it... respectively

    > -p allows us to map the ports (the container one to externally accessible one)

3. verifying

    open `http://localhost:6869` to view the webpage

    ![the ss](./thescs.png)
    ##### _the screenshot_

FROM node:latest

WORKDIR /usr/src/ZebbraStore

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY ./ ./

CMD ["/bin/bash"]

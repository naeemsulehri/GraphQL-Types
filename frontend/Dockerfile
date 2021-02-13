FROM node:10.23-alpine as build

RUN mkdir -p /extraleicht

COPY ./frontend/package.json /extraleicht

WORKDIR /extraleicht

RUN yarn install

COPY ./frontend /extraleicht

RUN yarn install
RUN yarn build

CMD [ "yarn", "dev" ]
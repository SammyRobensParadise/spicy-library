FROM node:15.8.0-alpine as base
WORKDIR /usr/src/spicy-library/
COPY . .
RUN yarn set version berry && yarn install --immutable
EXPOSE 6006
CMD [ "yarn", "start:storybook" ]

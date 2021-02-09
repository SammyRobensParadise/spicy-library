FROM node:14-alpine3.12 as base

WORKDIR /usr/src/spicy-library/
RUN yarn set version berry
COPY . .
# Becuase of this issue (https://bit.ly/3a5UUO9)
# we need to set the pnp mode to loose
RUN yarn install --immutable
EXPOSE 6006
CMD [ "yarn", "start:storybook" ]

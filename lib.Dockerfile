FROM node:14 as base

WORKDIR /usr/src/spicy-library/
RUN yarn set version berry
COPY yarn.lock .
COPY package.json .
COPY . .
RUN yarn install --immutable
# We need to copy the .yarnrc.yml file
# after setting the version to berry (Yarn 2)
# so that we do not overwrite any configs
EXPOSE 6006
CMD [ "yarn", "start:storybook" ]
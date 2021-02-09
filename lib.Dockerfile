FROM node:14-alpine3.12 as base

WORKDIR /usr/src/spicy-library/
RUN yarn set version berry
COPY . .
# Becuase of this issue (https://bit.ly/3a5UUO9)
# we need to set the pnp mode to loose
# otherwise yarn will exit since 
# @storybook/components does not
# declare regenerator-runtime as a dependency
# when the issue is fixed we can remove this. 
# RUN echo -e '\npnpMode: "loose"' >> .yarnrc.yml
RUN yarn install --immutable
EXPOSE 6006
CMD [ "yarn", "start:storybook" ]

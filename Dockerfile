FROM node:18-alpine as build
RUN apk add --no-cache curl \
  && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN pnpm i
RUN pnpm build

CMD ["pnpm", "preview"]
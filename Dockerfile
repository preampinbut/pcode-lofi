# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS deps
WORKDIR /temp/prod

COPY package.json bun.lock ./
RUN bun install

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS build
COPY --from=deps /temp/prod/node_modules node_modules
COPY . .

# [optional] tests & build
ARG DATABASE_URL
ENV NODE_ENV=production
ENV DATABASE_URL=$DATABASE_URL
RUN bun run prisma generate
RUN bun run build

FROM base AS release
COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public

CMD [ "bun", "run", "server.js" ]

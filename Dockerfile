FROM node:16
WORKDIR /usr/src/app


ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000


COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn run build


EXPOSE 3000
CMD [ "yarn", "run", "start" ]

FROM node:18

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4011

CMD ["yarn", "start:dev"]
#CMD ["yarn", "debug"]
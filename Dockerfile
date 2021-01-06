FROM node:12

WORKDIR /post-me

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm","start" ]
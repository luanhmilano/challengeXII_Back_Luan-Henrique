FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]
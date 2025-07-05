FROM node:22

WORKDIR /app/rotuclin

COPY package.json .

RUN npm i

COPY . .

# RUN npx prisma migrate deploy

RUN npx prisma generate

RUN npm run build

CMD npm run start
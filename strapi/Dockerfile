FROM node:12
 
ENV PORT 1337       

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337     

CMD "npm" "start"
FROM node:12

# change to 2995 in production 
ENV PORT 3000       

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
# change to 2995 in production
EXPOSE 3000     

CMD "npm" "run" "dev"


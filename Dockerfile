FROM node

WORKDIR /app
RUN npm install -g @nestjs/cli

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]

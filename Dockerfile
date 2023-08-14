FROM node

WORKDIR /app
RUN npm install -g @nestjs/cli

COPY ./package.json .
RUN npm install

COPY . .

ARG DEFAULT_PORT=80
ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD [ "npm", "run", "start" ]

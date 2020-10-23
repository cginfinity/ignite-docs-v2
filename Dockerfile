FROM node:lts

WORKDIR /app/src

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./src /app/src
RUN npm install

CMD ["npm", "start"]

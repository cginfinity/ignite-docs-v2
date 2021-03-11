FROM node:lts

WORKDIR /app

COPY ./docs /app/docs
COPY ./blog /app/blog
COPY ./src /app/src
COPY ./static /app/static
COPY ./babel.config.js /app/babel.config.js
COPY ./docusaurus.config.js /app/docusaurus.config.js
COPY ./package.json /app/package.json
RUN npm install

CMD ["npm", "start"]

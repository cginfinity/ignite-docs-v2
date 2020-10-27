FROM node:lts

WORKDIR /app/docu

EXPOSE 80
COPY . .
RUN npm install
RUN npm build

CMD ["npm", "start"]

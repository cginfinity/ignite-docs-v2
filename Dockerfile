FROM node:lts

RUN mkdir -p /app/docs

WORKDIR /app/docs

COPY ./package.json ./
RUN npm install
COPY . .
# EXPOSE 8080
# EXPOSE 80
# COPY . .
# RUN npm install
# RUN npm run build

CMD ["npm run build", "npm run start"]

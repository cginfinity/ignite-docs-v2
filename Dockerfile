FROM node:lts AS builder
WORKDIR /usr/src/docusaurus
COPY . .
RUN npm install
RUN npm run build

FROM nginx AS app
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/docusaurus .
FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN  npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve", "--", "--backendEnv=prod"]


# docker-composer up # to start the compilation process
# to install npm package run
# docker-compose exec web npm i bootstrap

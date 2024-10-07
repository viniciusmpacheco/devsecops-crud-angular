FROM node:latest AS prod
  RUN echo "Production docker image build was started"
  WORKDIR /usr/src/app
  COPY package.json package-lock.json ./
  RUN npm install
  COPY . .
  CMD ["npm", "run", "start"]

FROM node:latest AS stage
  RUN echo "Stage docker image build was started"
  WORKDIR /usr/src/app
  COPY package.json package-lock.json ./
  RUN npm install
  COPY . .
  CMD ["npm", "run", "start"]

FROM node:latest AS dev
  RUN echo "Development docker image build was started"
  WORKDIR /usr/src/app
  COPY package.json package-lock.json ./
  RUN npm install
  COPY . .
  CMD ["npm", "run", "start"]
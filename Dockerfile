FROM node:18.12.1-alpine
WORKDIR /code
COPY . .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "run", "dev"]

FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci && npm rebuild

COPY . .

EXPOSE 3000
CMD ["npm", "run" ,"start"] 
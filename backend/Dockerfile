FROM node:20-alpine AS baseimage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=baseimage /app/dist ./dist
EXPOSE 3001
CMD ["npm","start"] 
FROM node:20-alpine AS baseimage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=baseimage /app/dist ./dist
COPY --from=baseimage /app/package*.json ./
COPY --from=baseimage /app/node_modules ./node_modules
EXPOSE 3001
CMD ["npm","start"] 
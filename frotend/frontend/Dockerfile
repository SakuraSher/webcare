FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=base build/ /usr/share/nginx/html
COPY --from=base nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base modules/ /usr/share/nginx/modules
COPY --from=base certs/ /etc/nginx/certs
EXPOSE 443
CMD ["nginx", "-g","daemon off;"]
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine

COPY --from=build /app/dist/[your-angular-project] /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

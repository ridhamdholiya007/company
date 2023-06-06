FROM node:12-alpine
WORKDIR /company
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD node src/index.js
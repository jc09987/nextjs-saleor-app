FROM node:13.12.0-alpine

WORKDIR /nsa
ENV PATH /nsa/node_modules/.bin:$PATH

ARG v2

# Prepare to serve
EXPOSE 3000
ENV PORT 3000

# install app dependencies
COPY package.json ./
RUN npm install --silent

# check for vulnerabilities
RUN npm audit fix

# add app
COPY . ./

CMD ["npm", "start"]
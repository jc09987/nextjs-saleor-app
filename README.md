# nextjs-saleor-app
A simple e-commerce populated with Saleor API (GraphQL), nextJS and TailwindCSS.

## Environment setup

### 1. Clone the repo 

#### 1.1 Create a `.env` file in the project root and paste this line: `PORT=3000`

     cd nextjs-saleor-app/

### 2. Install all the required dependencies and start the server

     npm install && npm run dev

#### In Mac OS, if you see an error regarding `node-sass`, you must rebuild the package:

     npm rebuild node-sass

## Run only the GraphQL Code Generator

### Run all the tests at once

     cd nextjs-saleor-app/
     npm run generate

#### This will invoke the `graphql-codegen` library, using the `codegen.yml` file, along with the Saleor demo schema, it will create a Typescript File with all the graphs models and a json file with the custom schema.
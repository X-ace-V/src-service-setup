# src-service-setup

## Overview

`src-service-setup` is a boilerplate tool designed to automatically create a folder structure and basic files needed for starting a microservice using Node.js and Express. This package aims to simplify the initial setup process, ensuring a well-organized directory and default configuration for quick development.

## Features

- Creates a standard folder structure for microservices:
  - `src/config`
  - `src/controllers`
  - `src/middlewares`
  - `src/migrations`
  - `src/models`
  - `src/repository`
  - `src/routes/v1`
  - `src/seeders`
  - `src/services`
  - `src/utils`
- Automatically generates essential files with default content:
  - `src/index.js`
  - `src/routes/index.js`
  - `src/routes/v1/index.js`
  - `src/config/ServerConfig.js`
  - `.env` (with PORT configuration)
  - `config.json` (app details)

## Installation

- To install and set up the microservice boilerplate, simply run:

```bash
npm install src-service-setup

```

## Usage

- After running the installation command, you will find the following structure in your project:

```

project-directory/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── migrations/
│   ├── models/
│   ├── repository/
│   ├── routes/
│   │   └── v1/
│   ├── seeders/
│   ├── services/
│   └── utils/
├── .env
└── config.json

```

- The basic Express server setup can be found in the src/index.js file. The server listens on the port defined in the .env file (default: PORT=3000).

- You can extend the boilerplate by adding your controllers, services, and routes as required. The src/routes/v1/index.js file has placeholders for adding routes and linking controllers.

- You can modify the config.json file to include application-specific configurations.

## Example

- After installation, run the following command to start the server:

`node src/index.js`

- You should see the following output:

`Server started on Port 3000`

## Dependencies

- The package uses the following dependencies:

- `express`: Web framework for Node.js
- `dotenv`: Loads environment variables from .env file
- `fs-extra`: Module that extends the built-in fs module with additional methods

## License

- This project is licensed under the ISC License - see the LICENSE file for details.

## Author

- Vibhanshu Kumar
- Shivansh Tiwari
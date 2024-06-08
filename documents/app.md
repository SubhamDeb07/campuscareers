# CampusCareers

## Introduction

This project is designed to Create users

## Installation

To install the project, run the following command: npm install

## Usage

To use the project,
in terminal run (npm run watch)

Tu convert the project from typescript to javascript
in terminal run (npm run build)

## Project Structure

The project is structured as follows:
Src folder contains all the Typescript codebase
Inside src all the below folders are structured

- `/database/{nameOfCollection}/repo.ts`: All the functionalities is implemented in controllers
- `/database/{nameOfCollection}/model.ts/`: The database structure is implemented here
- `/routes/{nameOfCollection}/index.ts`: The api endpoints for the functionalities.
- `/config/database.ts`: The mongodb connecton is done here
- `app.js/`: app.js is the root file.
- `index.tss/`: It holds all the routes
- `app.js/`: app.js is the root file.

## Dependencies

The project depends on the following packages:

- `bcrypt`: Library for hashing passwords securely.
- `dotenv`: Library for loading environment variables from a .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JSON Web Tokens (JWT).
- `mongodb`: Official MongoDB driver for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environentm.

## Configuration

.env file has all the configurations and the example you can found it in .env.example

## Configuration

.env file has all the configurations and the example you can found it in .env.example

## API Reference

### Endpoint: /campus

#### POST /campus

A new campus can be created by sending a POST request to this endpoint with the following body and the campus can only be created by recruiters

```json
{
  "name": "",
  "campusCode": ""
}
```

#### GET /campus/searchCampuses

A registered campus can be searched by passing query of name or campuscode

### Endpoint: /candidate

#### POST /candidate/

A candidate can signup using the following body

```json
{
  "name": "",
  "email": ""
}
```

#### POST /candidate/login

A user can login by passing the body.

```json
{
  "email": ""
}
```

#### PUT /candidate/assignCampusCode

A candidate can be assigned himself/herself if they have been provided with right campusCode and the body will be

```json
{
  "campuscode": ""
}
```

### Endpoint: /recruiter

#### POST /recruiter/

A recruiter can signup using the following body

```json
{
  "name": "",
  "email": ""
}
```

#### POST /recruiter/login

A user can login by passing the body.

```json
{
  "name": ""
}
```

#### GET /recruiter/findShortlistedCandidates/:campusCode

A recruiter can find the all the shortlisted candidate using campuscode

### Incompleted part

1. Dockerization

## ENV

I have provide an env-example for your referance

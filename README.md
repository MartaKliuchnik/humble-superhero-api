# Humble Superhero API

## Table of Contents

1. [Description](#description)
2. [System requirements](#system-requirements)
3. [Base URL](#base-url)
4. [API Documentation](#api-documentation)

   4.1 [Superheroes Management](#superheroes-management)

   - Superhero data model.
   - Endpoint **/api/v1/superheroes**

5. [Testing](#testing)
6. [If I had more time](#if-i-had-more-time)

## Description

Humble Superhero API is a simple yet powerful RESTful API that allows users to
manage a collection of superheroes. Each superhero has a name, a superpower, and
a "humility score" (rated from 0 to 10). The API enables users to add new
superheroes and retrieve them in descending order of humility, promoting the
idea that true heroes are both powerful and humble.

## System Requirements

- **Programming language**: JavaScript, TypeScript
- **Backend**: Node.js framework - Nest.js
- **Frontend framework**: React.js
- **Database**: In-memory storage
- **Containerization**: Docker

## Base URL

The base URL for accessing the Humble Superhero API is:

`http://localhost:8080/api/v1/`

All endpoints for the Humble Superhero API can be accessed through this base
URL.

**Example Usage**  
To make a request to the API, prepend the base URL to the endpoint path. For
instance, to fetch the list of superheroes:

`GET http://localhost:8080/api/v1/superheroes`

## API Documentation

### Superheroes Management

#### 1. Superhero data model

Each superhero has the following attributes:

| Column Name   | Data Type     | Description                                         |
| :------------ | :------------ | :-------------------------------------------------- |
| id            | string (UUID) | A unique identifier (UUID) for each superhero       |
| name          | string        | The name of the superhero (must be unique)          |
| superpower    | string        | A brief description of the superhero's ability      |
| humilityScore | number        | A rating (1-10) indicating the superhero's humility |

#### 2. Create a new superhero

Endpoint

- URL Path: `/api/v1/superheroes`
- Method: `POST`
- Description: This endpoint adds a new superhero. It accepts superhero details
  in the request body and returns the created superhero upon success.

**Request Body**

The request must be in JSON format and include the following fields:

- name (string, required): The name of the superhero (must be unique)
- superpower (string, required): The superhero's special ability
- humilityScore (number, required): A value between 1-10 representing humility

**Example Request**

Description: A `POST` request to the superheroes creation endpoint. It includes
a superhero name, superpower and humility score.

```

curl -X POST http://localhost:8080/api/v1/superheroes \
-H "Content-Type: application/json" \
-d '{
  "word": "Spider-Man",
  "superpower": "Wall-crawling, spider-sense, agility",
  "humilityScore": 10
}'

```

**Example Responses**

Status code: **201 Created**

Description: The superhero has been successfully added. The response includes a
success message and the data of the added superhero.

```
{
    "id": "b1477d7c-3ab2-4386-9976-a8f21f90281b",
    "name": "Spider-Man",
    "superpower": "Wall-crawling, spider-sense, agility",
    "humilityScore": 10
}
```

Status code: **400 Bad Request**

Description: Missing required fields or invalid data.

```
{
    "message": "Invalid request. Ensure all required fields are provided."
}
```

Status code: **409 Conflict**

Description: This response indicates that the request could not be processed
because the superhero is already taken.

```
{
    "message": "Superhero already exists."
}
```

#### 3. Retrieve all superheroes

Endpoint

- URL Path: `/api/v1/superheroes`
- Method: `GET`
- Description: This endpoint retrieves a list of all superheroes, ordered by
  their humility score in descending order.

**Example Request**

Description: A `GET` request to retrieve all superheroes.

```
curl -X GET http://localhost:8080/api/v1/superheroes \
```

**Example Responses**

Status code: **200 OK**

Description: This status indicates that the request was successful, and the
server returns a list of all superheroes.

```
{
    [
        {
            "id": "b1477d7c-3ab2-4386-9976-a8f21f90281b",
            "name": "Spider-Man",
            "superpower": "Wall-crawling, spider-sense, agility",
            "humilityScore": 10
        },
        {
            "id": "42d8ed8e-7325-4233-badb-08c1ccad7699",
            "name": "Batman",
            "superpower": "Genius intellect, martial arts, wealth",
            "humilityScore": 9
        },
        ...
    ]
}
```

Status code: **500 Internal Server Error**

Description: This response indicates an unexpected error occurred during the
retrieving data.

```
{
    "message": "An unexpected error occurred. Please try again later."
}
```

## Testing

This project has unit testing implemented to maintain high code quality and
reliability.

- **Unit Testing:** Files have extension .spec.ts. One testing file per service
  or controller.

**Testing commands:**

Before tests use `cd ./server` to navigate to server directory.

- Run tests: `npm run test`
- Run tests in watch mode: `npm run test:watch`

## If I had more time

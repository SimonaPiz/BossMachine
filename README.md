# <img src="https://github.com/SimonaPiz/BossMachine/blob/main/public/img/favicon.ico" width="25px" alt="icon Boss Machine" title="icon Boss Machine"/> Boss Machine
> Create an API to serve information to a Boss Machine App

<img src="https://github.com/SimonaPiz/BossMachine/blob/main/anteprima-home.png" width="600px" alt="preview" title="preview"/>

## Table of Contents
* [General Info](#general-information)
* [Implementation Details](#implementation-details)
* [Testing](#testing)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## General Information

In this project, I created an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. 
I created routes to manage the 'minions', the brilliant 'million dollar ideas', and to handle all the annoying meetings that keep getting added to the busy schedule.

You can view a video demonstration of the final app here: [▶](https://content.codecademy.com/programs/build-apis/solution-videos/BossMachine480.mov)

## Implementation Details

To complete the project, I needed to complete code on getting the API server up and running:

- [x] Server Boilerplate

  Added key functionality to allow it to run:

  - Set up body-parsing middleware
  - Set up CORS middleware
  - Mount the existing `apiRouter` at `/api`.
  - Start the server listening on the provided `PORT`.

  ✔ [issue #2](https://github.com/SimonaPiz/BossMachine/issues/2)

- [x] API Routes

    Routes Required

  - `/api/minions`
    - GET /api/minions to get an array of all minions.
    - POST /api/minions to create a new minion and save it to the database.
    - GET /api/minions/:minionId to get a single minion by id.
    - PUT /api/minions/:minionId to update a single minion by id.
    - DELETE /api/minions/:minionId to delete a single minion by id.

  - `/api/ideas`
    - GET /api/ideas to get an array of all ideas.
    - POST /api/ideas to create a new idea and save it to the database.
    - GET /api/ideas/:ideaId to get a single idea by id.
    - PUT /api/ideas/:ideaId to update a single idea by id.
    - DELETE /api/ideas/:ideaId to delete a single idea by id.

  - `/api/meetings`
    - GET /api/meetings to get an array of all meetings.
    - POST /api/meetings to create a new meeting and save it to the database.
    - DELETE /api/meetings to delete _all_ meetings from the database.
  
  ✔ [issue #3](https://github.com/SimonaPiz/BossMachine/issues/3)

- [x] Working with the 'Database'

  Import and use helper functions for working with the database arrays on all routers:

  - getAllFromDatabase
  - getFromDatabaseById
  - addToDatabase
  - updateInstanceInDatabase
  - deleteFromDatabasebyId
  - deleteAllFromDatabase
  ✔ [issue #4](https://github.com/SimonaPiz/BossMachine/issues/4)

#### Schemas

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string


- [x] Custom Middleware

  I created a custom middleware function `checkMillionDollarIdea` that will come in handy in some /api/ideas routes. 
  This function makes sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its `numWeeks` and `weeklyRevenue` properties.

  ✔ [issue #7](https://github.com/SimonaPiz/BossMachine/issues/7)

- [x] Bonus

  As a bonus, you may implement routes to allow bosses to add and remove work from their minions' backlogs.

Schema:

- Work:
  - id: string
  - title: string
  - description: string
  - hours: number
  - minionId: string

#### Routes required:

  - GET /api/minions/:minionId/work to get an array of all work for the specified minon.
  - POST /api/minions/:minionId/work to create a new work object and save it to the database.
  - PUT /api/minions/:minionId/work/:workId to update a single work by id.
  - DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

  ✔ [issue #8](https://github.com/SimonaPiz/BossMachine/issues/8)

## Testing

Run
```
  $ npm run test
```
to test:
- [x] API Routes
- [x] checkMillionDollarIdea middleware
- [x] Bonus

✔ [issue #5](https://github.com/SimonaPiz/BossMachine/issues/5)

![test results](https://user-images.githubusercontent.com/91121660/278086636-f11bfdd8-82c8-47ba-872c-afbf76bc0750.png)

## Screenshots

<img src="https://github.com/SimonaPiz/BossMachine/blob/main/anteprima-minions.png" width="600px" alt="preview" title="preview"/>
<img src="https://github.com/SimonaPiz/BossMachine/blob/main/anteprima-minion-single.png" width="600px" alt="preview" title="preview"/>
<img src="https://github.com/SimonaPiz/BossMachine/blob/main/anteprima-ideas.png" width="600px" alt="preview" title="preview"/>

## Usage

1. Open the root project directory in your terminal. Run 
```
  $ npm install
``` 
  to install the dependencies of this project and build the front-end application. 
2. Once it has finished installing, you can run 
```
  $ npm run start
``` 
  to begin your server. You'll see 
```
  Server listening on port 4001
``` 
  in the terminal. 

3. To see the application in its initial, non-working state, simply open **index.html** in a web browser.

## Technologies Used
   - React 18
   - React router dom 6
   - React Redux 8
   - @reduxjs/toolkit
   - mocha 10
   - chai 4
   - @faker-js/faker 8
   - express 4

## Acknowledgements

This project comes from the [Codecademy's Create a Back-End with JavaScript](https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript) course.

## Author

- [Simona Pizio](https://github.com/SimonaPiz)

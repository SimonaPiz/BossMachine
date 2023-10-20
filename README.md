# Boss Machine

## Project Overview

In this project, you will create an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. You will create routes to manage your 'minions', your brilliant 'million dollar ideas', and to handle all the annoying meetings that keep getting added to your busy schedule.

You can view a video demonstration of the final app here:

<video width="100%" height="100%" controls>
   <source src="https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

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

### Routes Required

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


### Custom Middleware

- You will create a custom middleware function `checkMillionDollarIdea` that will come in handy in some /api/ideas routes. Write this function in the **server/checkMillionDollarIdea.js** file. This function will make sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its `numWeeks` and `weeklyRevenue` properties.

### Bonus

As a bonus, you may implement routes to allow bosses to add and remove work from their minions' backlogs.

Schema:

- Work:
  - id: string
  - title: string
  - description: string
  - hours: number
  - minionId: string

Routes required:

- GET /api/minions/:minionId/work to get an array of all work for the specified minon.
- POST /api/minions/:minionId/work to create a new work object and save it to the database.
- PUT /api/minions/:minionId/work/:workId to update a single work by id.
- DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

To work on the bonus with tests, you will need to remove their pending status. Open the **test/test.js** and edit that begins the /api/minions/:minionId/work routes tests. It should start with `xdescribe(` around line 689 of the test file. If you delete the `x` (so that the line simply starts with `describe(` and save the test file before re-running, your bonus tests will now be active.

In order to fully implement these routes, the database helper functions may not provide all the functionality that you need, and you may need to use router parameters or other methods to attach the `minionId` properties correctly and handle the edge cases property. Good luck!

## Testing

Run
```
  $ npm run test
```
to test:
- [ ] API Routes
- [ ] checkMillionDollarIdea middleware
- [ ] Bonus

✔ [issue #5](https://github.com/SimonaPiz/BossMachine/issues/5)
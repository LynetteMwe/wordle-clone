# Wordle-Clone
The Wordle-clone game was created using React-JS and used the JSON server to store data.

## Available Scripts

To start the server, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Installing dependencies
The words for the game together with the values of the keypad are stored in a json file (db.json).
To install json-server, run:
### `$ npm install -g jsonserver`

To run the json-server (on a different terminal from the one running `npm start`):
### `npx json-server --watch data/db.json --port 3001`

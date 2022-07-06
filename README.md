# Hiring Task - Alice in Wonderland

## Overview

This application presents a web-based interface built with [React](https://reactjs.org/) to read _Alice in Wonderland_ by Lewis Carroll, in which the names of characters are equipped with rich tooltips providing information about the characters.

### Implementation Details

The application consists of two "services," an API and a UI. The UI is built with React and uses the [MUI](https://mui.com/) component library. The API has access to the full text of _Alice in Wonderland_ and a list of characters.

**implementation details**

Front-End:

1. Created CardMaker.js file to create a card with character's name and description

2. Implemented CharacterCards.js which makes an API call to the backend so it populates the UI with the Character's name and description.

3. Created a toggle button once clicked it will show the Character's name and description in a card. The cards dynamically adjust based on the screen size.

4. Created TextData.js that would loop over the response from the GET request and displays it in a container.

5. Added PaginationMaker.js for a better user experiance. Before implemntation the user would have to keep scrolling to read the text. Now the user can flip through the pages of the book.

6. Implemented a fix to the ReactDOM.render function because it was no longer supported on React 18.

Back-End:

1. Created `/text` route to be able to read the `.txt` file and break it up into arrays which also included spacings then send it back as a json

2. Created `/characters` route to send back the characters name and discription as json

3. Created middleWare to handle errors

| Method | Endpoint      | Returns                         |
| ------ | ------------- | ------------------------------- |
| GET    | `/text`       | `gets all the text `            |
| GET    | `/characters` | `gets all the characters `      |
| GET    | `/test`       | `{message: "API is working." }` |

## Development

### Prerequisites

- Node v18.0.0
- NPM 8.6.0

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) is recommended.

### Installing Dependencies

Run `npm i` in the project root to install all necessary dependencies.

### Development Environment

Executing `npm start` in the project root will invoke [Concurrently](https://github.com/open-cli-tools/concurrently) to spin up both services:

- **nodemon** serves the API on port `3030`;
- **Webpack Dev Server** serves the UI on port `8080`.

With the above port configurations, the UI can be accessible in your browser at `http://localhost:8080`, and requests can be made from the UI, to the API, via `http://localhost:3030`.

### Adding New Dependencies

This project makes use of [webpack-workspace](https://www.npmjs.com/package/webpack-workspace). To add a dependency for the shell application, run `npm i` from the project root directory. To add an API dependency, run `npm i desired-package -w api`. To add a UI dependency, run `npm i desired-package -w ui`.

## Production

For the purposes of this task assessment, we won't concern ourselves with production details.

## References

This is a non-exhaustive list of tools used in this application.

- [Node.js](https://nodejs.org/en/)
  - [Concurrently](https://github.com/open-cli-tools/concurrently)
  - [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
  - [MUI](https://mui.com/)
- [Webpack](https://webpack.js.org/)
  - [webpack-workspace](https://www.npmjs.com/package/webpack-workspace)

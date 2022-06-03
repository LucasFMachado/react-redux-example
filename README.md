# ReduxShoes

> This project was developed with the main purpose of demonstrating the functioning of a React application that uses Redux and Redux Saga, to manage global states.
> 
> It is an application that has only two screens:
> - Product listing
> - Shopping cart
> 
> To develop the project's API, the json-server library (https://github.com/typicode/json-server) was used, which simulates a Rest API according to the model created. The API data contains the information and the number in stock of each of the available products.


##### To run the project, run the following commands:
* Clone the repository: ```$ git clone /* project_repository */ ```
* Install project dependencies: ```$ yarn```
* Run the project: ```$ yarn start```
* Run the Fake API: ```$ json-server server.json -p 3333```

##### Technologies used in this project:
* [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) - to manage application routes
* [Redux](https://redux.js.org) - to save global application states
* [Redux Saga](https://redux-saga.js.org) - to manage global application states
* [Styled Components](https://styled-components.com) - for application styling
* [JSON Server](https://github.com/typicode/json-server) - to mock the project API

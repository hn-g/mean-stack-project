# Stack Project

This project demonstrates a simple web application using Node.js, Express.js for the backend, and Angular for the frontend. It implements a stack data structure with configurable size and provides a web interface to interact with the stack.

## Project Structure

```
client/stack-app/
├── src/
│   └── app/
│       ├── stack/
│       │   ├── stack.component.html
│       │   ├── stack.component.ts
│       │   └── ...
│       └── ...
server/models/
│   └── Stack.js
server/controllers/
│   ├── stackController.js
│   └── ...
server/routes/
│   └── stackRoutes.js
server/server.js
└── package.json
└── README.md
```

## Setup

### Backend

1. Install dependencies:

   ```
   npm install
   ```

2. Start the backend server:

   ```
   npm start
   ```

3. Test the backend server:

   ```
   npm test
   ```

### Frontend

1. Navigate to the `client\stack-app` directory:

2. Install Angular dependencies:

   ```
   npm install
   ```

3. Start the Angular development server:

   ```
   ng serve
   ```

4. Visit `http://localhost:4200` in your web browser.

5. Test the frontend (Backend server should be running):

   ```
   ng test
   ```

## Usage

- The web interface allows you to push, pop, and display integers in the stack.
- You can also update the stack size from the UI.

## API Endpoints

- `POST /api/stack`: Push an item onto the stack.
- `DELETE /api/stack`: Pop an item from the stack.
- `GET /api/stack`: Get the current state of the stack.
- `PUT /api/stackSize`: Update the stack size and adjust existing contents if necessary.
- `GET /api/stackSize`: Get the stack size.

## Stack Data Structure

The stack data structure is implemented using JavaScript arrays. The stack size is configurable and can be updated dynamically.

## Contributors

- [Himanshu Neo Garg](https://github.com/hn-g)

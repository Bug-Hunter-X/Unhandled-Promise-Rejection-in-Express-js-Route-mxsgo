# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: improper handling of asynchronous operations within routes.  When an asynchronous operation (like a database query or external API call) throws an error, the Express.js app might fail silently without sending a proper response to the client.  This can lead to frustrating debugging and unexpected behavior.

The `bug.js` file shows the problematic code. The `bugSolution.js` provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js`.  Observe that the server starts, but requests to `/` might not return any response if `someAsyncOperation` fails.
4. Run `node bugSolution.js`.  This version handles errors gracefully, sending appropriate error responses to the client.
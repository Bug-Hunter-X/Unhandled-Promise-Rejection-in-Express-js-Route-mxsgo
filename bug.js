const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling here is missing a proper response to the client
    console.error(err);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
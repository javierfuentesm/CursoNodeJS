const express = require('express');
const app = express();
const { config } = require('./config/index');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');

const moviesApi = require('./routes/movies.js');

// app.get('/year/:year2', (req, res) => {
//   const leapyear = year => {
//     return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
//   };
//   res.send(
//     leapyear(req.params.year2) ? 'El año es bisiesto' : 'El año no es bisiesto'
//   );
// });
//body parser
app.use(express.json());

//routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});

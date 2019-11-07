const express = require('express');
const slash = require('express-slash');

const app = express();
const { config } = require('./config/index');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const authApi = require('./routes/auth.js');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');

// app.get('/year/:year2', (req, res) => {
//   const leapyear = year => {
//     return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
//   };
//   res.send(
//     leapyear(req.params.year2) ? 'El año es bisiesto' : 'El año no es bisiesto'
//   );
// });

app.enable('strict routing');

//body parser
app.use(express.json());
// Create the router using the same routing options as the app.
var router = express.Router({
  caseSensitive: app.get('case sensitive routing'),
  strict: app.get('strict routing')
});

app.use(router);
app.use(slash());
//routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});

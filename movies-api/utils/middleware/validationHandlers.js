const boom = require('@hapi/boom');

function valdiate() {
  return false;
}

function validationHandler(schema, check = 'body') {
  return (req, res, next) => {
    const error = valdiate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;

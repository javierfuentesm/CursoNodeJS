const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function valdiate(data, schema) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

function validationHandler(schema, check = 'body') {
  return (req, res, next) => {
    const error = valdiate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;

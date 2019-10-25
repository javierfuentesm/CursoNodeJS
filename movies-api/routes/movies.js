const express = require('express');
const MovieService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandlers');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MovieService();

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    } catch (err) {
      next(err);
    }
  });
  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const movie = await movieService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: 'Movie retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.post(
    '/',
    validationHandler( createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      try {
        const createdMovieId = await movieService.createMovie({ movie });
        res.status(201).json({
          data: createdMovieId,
          message: 'Movie created'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler( updateMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      const { movieId } = req.params;

      try {
        const updatedMovieId = await movieService.updateMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: updatedMovieId,
          message: 'Movies updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const deletedMovieId = await movieService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'Movies deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.patch(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler( updateMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      const { movieId } = req.params;

      try {
        const patchedMovieId = await movieService.patchMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: patchedMovieId,
          message: 'Movies patched'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}
module.exports = moviesApi;

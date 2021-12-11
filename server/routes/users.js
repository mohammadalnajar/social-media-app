import express from 'express';

export const router = express.Router();

router
  .route('/api/users')
  .get((req, res) => {
    res.send('get users');
  })
  .post((req, res) => {
    res.json(req.body);
  })
  .put((req, res) => {
    res.send('update user');
  });

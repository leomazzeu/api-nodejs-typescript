import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello World!');
});

router.post('/', (req, res) => {
  const result = req.body;
  return res.status(StatusCodes.ACCEPTED).json(result);
});

export { router };
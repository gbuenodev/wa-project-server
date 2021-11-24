import express from 'express';
import error from '../global/middlewares/error';
import ranking from '../modules/ranking';

const router = express.Router({ mergeParams: true });

router.use('/ranking', ranking);

router.use(error);

export default router;
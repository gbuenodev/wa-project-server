import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { getRankingHandler } from '../services';


const getRanking = async (_req:Request, res:Response) => {
  const data = await getRankingHandler();
  res.status(StatusCodes.OK).send(data);
  return;
}

export default getRanking;
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { postRankingHandler } from '../services';


const getRanking = async (req:Request, res:Response) => {
  const { name, score }: { name: string, score: number } = req.body;
  const data = await postRankingHandler(name, score);
  res.status(StatusCodes.CREATED).send(data);
  return;
}

export default getRanking;
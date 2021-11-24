import { NotFound } from "../../../global/errors";
import { findRanking } from "../models";

const getRankingHandler = async () => {
  const data = await findRanking();
  if (!data.length) throw new NotFound;
  return data
};

export default getRankingHandler;
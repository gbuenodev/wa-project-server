import insertOneRanking from "../models/insertOneRanking";

const postRankingHandler = async (name:string, score:number) => {
  const data = await insertOneRanking(name, score);
  return data
};

export default postRankingHandler;
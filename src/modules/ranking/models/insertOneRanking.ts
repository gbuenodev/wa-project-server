import Ranking from "../schemas"

const insertOneRanking = async (name:string, score:number) => Ranking.create({name, score});

export default insertOneRanking;
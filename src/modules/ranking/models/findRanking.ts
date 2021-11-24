import Ranking from "../schemas"

const findRanking = async () => Ranking.find().sort({'score': -1});

export default findRanking;
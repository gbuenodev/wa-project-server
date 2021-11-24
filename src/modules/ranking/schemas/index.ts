import mongoose from "../../../connection";

interface IRanking extends mongoose.Document {
  name: string;
  score: number;
};

const rankingSchema = new mongoose.Schema({
  name: String,
  score: Number,
}, {collection: 'ranking'});

const Ranking = mongoose.model<IRanking>('ranking', rankingSchema);

export default Ranking;
import expresse from 'express';
import rescue from 'express-rescue';
import {getRanking, postRanking} from './controllers';

const ranking = expresse.Router();

ranking.get('/', rescue(getRanking));
ranking.post('/', rescue(postRanking));

export default ranking;
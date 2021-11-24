import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import router from './src/routes/routes';


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
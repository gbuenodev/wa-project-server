import mongoose from 'mongoose'

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      DB_URI: string
    }
  }
};

const DB_URI = process.env.DB_URI

const client = () => {
  try {
    mongoose.connect(DB_URI);
  } catch (err) {
    console.log('Connection failed');
  }
};

client();

export default mongoose;
import dotenv from 'dotenv';

dotenv.config();

export const { DB, USER, PASSWORD, NODE_ENV } = process.env;

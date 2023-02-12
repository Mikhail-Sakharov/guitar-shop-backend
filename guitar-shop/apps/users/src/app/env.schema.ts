import * as Joi from 'joi';
import {DEFAULT_PORT, DEFAULT_MONGO_DB_HOST, DEFAULT_MONGO_DB_PORT} from './app.constant';

export default Joi.object({
  PORT: Joi
    .number()
    .port()
    .default(DEFAULT_PORT)
    .required(),
  JWT_SECRET: Joi
    .string()
    .required(),
  MONGO_DB: Joi
    .string()
    .required(),
  MONGO_HOST: Joi
    .string()
    .hostname()
    .default(DEFAULT_MONGO_DB_HOST)
    .required(),
  MONGO_PORT: Joi
    .number()
    .port()
    .default(DEFAULT_MONGO_DB_PORT)
    .required(),
  MONGO_USER: Joi
    .string()
    .required(),
  MONGO_PASSWORD: Joi
    .string()
    .required(),
  MONGO_AUTH_BASE: Joi
    .string()
    .required()
});

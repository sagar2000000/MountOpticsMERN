import express from 'express';
import { CodController } from '../Controllers/cod.controller.js';



 export const codRouter = express.Router();



codRouter.post("/proceed-order",CodController)
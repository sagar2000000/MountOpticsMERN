import express from 'express'
import { EsewaInitiatePayment, paymentStatus } from '../Controllers/esewa.controller.js'


 export const esewaRouter = express.Router()


esewaRouter.post("/payment-initiate",EsewaInitiatePayment)
esewaRouter.post("/payment-status", paymentStatus);
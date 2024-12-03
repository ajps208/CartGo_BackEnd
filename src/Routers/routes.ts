import express, { Request, Response } from "express";

const router = express.Router();
const productController=require('../Controllers/productController')


// Create a new product
router.post("/",productController.addProducts);

export default router;

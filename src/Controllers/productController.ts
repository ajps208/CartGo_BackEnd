import { Request, Response } from "express";
import Product from "../Models/models";

interface ProductRequestBody {
  name: string;
  price: number;
  description: string;
}

exports.addProducts = async (req: Request<{}, {}, ProductRequestBody>, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new Product({
      name,
      price,
      description,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

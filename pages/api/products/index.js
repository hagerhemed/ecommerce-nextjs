import { products } from "@component/data/products";
import { v4 as uuid } from "uuid";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const { title, description, image } = req.body;
    const newProduct = {
      id: uuid(),
      title: title,
      description: description,
      image: image,
    };
    products.push(newProduct);
    res.status(200).json(products);
  }
}
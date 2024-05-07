import { products } from "@component/data/products";

export default function handler(req,res){
    const {productId}=(req.query);
    const index= products.findIndex((prd)=>{console.log(prd.id ,"     ", productId); return prd.id.toString()===productId})
    products.splice(index,1)
    res.status(200).json({msg:"deleted"})
}
import Product from "../models/Product";

 export const createProduct= async (req, res)=>{

 }
 export const getProducts=async(req, res)=>{
      const products=await Product.find();
      res.json(products)
 }

 export const getProductById=async(req, res)=>{
  const product= await Product.findById(req.params.productId)
  res.status(200).json(product)
 }

 export const updateProductById=async(req, res)=>{
  
 }

 export const deleteProductById=async(req, res)=>{
  
 }
 
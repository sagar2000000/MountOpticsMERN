import { products } from "../Models/product.model.js";
import fs from 'fs'
const addProduct = async (req,res)=>{
  
  let image_filename=`${req.file.filename}`;
  let image_filenameB=`${req.file.filename}`;
 const {price,category,FrameMaterial,TempleMaterial,FrameShape,FrameSize,Framecolor,top,stock,BaseCurve,Diameter,WaterContent,Packaging,name}=req.body;
  console.log(req)
  console.log(req.file.filename)
  const product = new products({
    name,
    price,
    category,
    image:image_filename,
    imageB:image_filenameB,
    FrameMaterial,
    TempleMaterial,
    FrameSize,
    FrameShape,
    Framecolor,
    top,
    stock,
    BaseCurve,
    Diameter,
    WaterContent,
    Packaging,


  })
  try {
    console.log("hello ")
    await product.save();
    res.json({success:"true",message:"product added"})
  } catch (error) {
    console.log(err)
    res.json({success:false,message:"Error"})
    
  }
}



const listProduct=async(req,res)=>{
  try {
    const products=await products.find({});
      res.json({success:true,data:products})
    
    
  } catch (error) {
     console.log(error)
     res.json({success:false,message:"error"})
  }
}


const removeProduct=async(req,res)=>{
  try {
    const product=await products.findById(req.body._id)
    fs.unlink(`uploads/${product.image}`,()=>{})
    fs.unlink(`uploads/${product.imageB}`,()=>{})
    await products.findByIdAndDelete(req.body._id)
    res.json({success:true,message:"Product Removed"})
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
    
  }

}
export {addProduct,listProduct,removeProduct}
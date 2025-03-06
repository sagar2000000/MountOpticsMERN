import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageB: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },
  FrameMaterial: {
    type: String,
  },
  TempleMaterial: {
    type: String,
  },
  FrameShape: {
    type: String,
  },
 
  FrameSize: {
    type: String,
  },
  Framecolor: {
    type: String,
  },
  top: {
    type: String,
    default: "no",
  },

  BaseCurve: {
    type: String,
    
  },
  Diameter: {
    type: String,
  },
  WaterContent: {
    type: String,
  },

  Packaging: {
    type: String,
  },
});




export const products = mongoose.models.product || mongoose.model('product', productSchema);





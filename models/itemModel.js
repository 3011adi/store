import mongoose from "mongoose";
const itemSchema =mongoose.Schema(
  {
    seller:{
        type:String,
        required: true,
    },
    object:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },

  }
);
export const Book = mongoose.model(' Item ',itemSchema);
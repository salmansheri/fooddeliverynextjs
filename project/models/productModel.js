import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    
    }, 

    desc: {
        type: String, 
        required: true, 
    }, 

    img: {
        type: String, 
        required: true, 
    }, 
    prices: {
        type: [Number], 
        required: true, 
    }, 
    extraoption: {
        type: [{text: {type: String, required: true}, price: {type: Number, required: true}}]
    }

}, {
    timestamps: true
})

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema); 

export default productModel; 
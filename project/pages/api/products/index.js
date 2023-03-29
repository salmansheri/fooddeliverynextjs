import dbConnect from "@/libs/dbConnect";
import productModel from "@/models/productModel";


export default async function handler(req, res) {
    const {method} = req; 
    
    await dbConnect(); 

    if(method === "GET") {
        try {
            const products = await productModel.find({})
            res.status(200).json(products)
          

        } catch(err) {
            res.status(500).json(err)
            console.log(`Error: ${err}`)
        }
    }

    if(method === "POST") {
        try {
            const { title, desc, img, prices, extraoption} = req.body; 
            const newProduct = await productModel.create({
                title, 
                desc, 
                img, 
                prices, 
                extraoption, 
            })

            res.status(201).json({success: true, message: newProduct});
            console.log("successfully added product")



        } catch(err) {
            res.status(500).json({success: false, message: err}); 
            console.log(`Error: ${err}`); 
        }
    }
}
import dbConnect from "@/libs/dbConnect";
import productModel from "@/models/productModel";

export default async function handler(req, res) {
    const {method, query: {id}} = req; 

    dbConnect(); 

    if(method === "GET") {
       try {

        const product = await productModel.findById(id);
        res.status(200).json(product); 
        console.log("success")

       } catch(err) {
        res.status(200).json(err)
        console.log(err)
       }
    }

    if(method === "PUT") {
        try {
           
            const product = await productModel.findByIdAndUpdate(id); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
        }
    }

    if(method==="DELETE") {
        try {
           
            const product  = await productModel.findByIdAndDelete({_id: id}); 
            res.status(200).json({message: "Deleted Successfully"}); 
            console.log("Deleted successfully"); 


        } catch(err) {
            res.status(500).json({message: err})
            console.log(err); 
        }
    }
}
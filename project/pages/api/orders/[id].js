import dbConnect from "@/libs/dbConnect";
import orderModel from "@/models/orderModel"; 


export default async function handler(req, res) {
    const {method, query: {id}} = req; 

    await dbConnect();

    if(method === "GET") {
        try {
            const order = await orderModel.findById({_id: id}); 
            res.status(201).json(order)
            console.log("successfull")


             
        } catch(err) {
            res.status(500).json({message: err});
            console.log(err); 
        }

    } 

   if(method === "PUT") {

   }

   if(method === "DELETE") {
    try {
        const order = await orderModel.findByIdAndDelete({_id: id})

    } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
    }


   }
}
import dbConnect from "@/libs/dbConnect";
import orderModel from "@/models/orderModel";

const handler = async (req, res) => {
    const {method} = req; 
    
    await dbConnect();
    if(method === "GET") {
        try {
            const orders = await orderModel.find({}); 
            res.status(200).json(orders); 

        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
        }

    } 

    if(method === "POST") {
        try {
            
            const order = await orderModel.create(req.body)

            res.status(201).json(order); 
            console.log("successfully created order")

        } catch(err) {
            res.status(500).json({message: err})
            console.log(err)
            

        }


    }

}

export default handler; 
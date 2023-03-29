
import cookie from 'cookie';


const handler = (req, res) => {
    const {method} = req; 

    if(method === "POST") {
        try {
            const {username, password} = req.body; 
            if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD ) {
                res.setHeader("Set-Cookie", cookie.serialize("token", process.env.TOKEN, {
                    maxAge: 60, 
                    sameSite: "strict", 
                    path: "/", 
                    
                }))
    
                res.status(200).json("Success")
            } else {
                res.status(400).json("Wrong Credentials!")
            }

        } catch(err) {
            res.status(500).json(err)
            console.log(err)

        }
      
    }


}

export default handler;  
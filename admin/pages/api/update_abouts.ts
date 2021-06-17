

export default async function handler(req, res){
    
    const {newAbouts} = req.body

    try{

        await Promise.all(newAbouts.map(async (about, i)=>{

            const {heading, text} = about

            const response = await fetch(`${process.env.STRAPI_URL}/abouts/${about.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": req.headers.authorization
                },
                body: JSON.stringify({heading, text})
            })
            const data = await response.json()
        }))

        res.status(200).json({status:'updated'})

    }catch(e){
        console.error(e)
        res.status(400).json({status: "error", message: "Something went wrong"})
    }
}
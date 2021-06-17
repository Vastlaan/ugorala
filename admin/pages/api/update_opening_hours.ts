export default async function handler(req, res){

    const {newHours} = req.body

    console.log(newHours)

    try{
        await Promise.all(newHours.map(async (row)=>{
            const {id, day, start, end} = row
            const response = await fetch(`${process.env.STRAPI_URL}/opening-hours/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": req.headers.authorization
                },
                body: JSON.stringify({day, start, end})
            })
            const data = await response.json()
        }))
    
        res.status(200).json({status: "updated"})

    }catch(e){
        console.error(e)
        res.status(400).json({status: "error"})

    }


}
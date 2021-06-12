

export default async function handler(req, res){

    const {newHours} = req.body

    try{

        await Promise.all(newHours.forEach(async (row)=>{
            try{
                const {id, day, start, end} = row
                const response = await fetch(`${process.env.STRAPI_URL}/opening-hours/${id}`,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({day, start, end})
                })
                const data = await response.json()
            
                console.log(data)
            }catch(e){
                console.error(e)
            }
        }))
    
        res.status(200).json({status: "Success"})

    }catch(e){
        console.error(e)
        res.status(200).json({status: "Success"})

    }


}
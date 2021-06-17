
export default async function updateStories(req, res){
    const {newStories} = req.body

    try{
        await Promise.all( newStories.map( async (story)=>{

            const {heading, imgUrl, paragraphs, id} = story
            try{
                const response = await fetch(`${process.env.STRAPI_URL}/stories/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": req.headers.authorization
                    },
                    body: JSON.stringify({heading, imgUrl, paragraphs})
                })
                const data = await response.json()

            }catch(e){
                console.error(e)
                
            }
        }))

        res.status(200).json({status: "updated"})
        
    }catch(e){
        console.error(e)
        res.status(400).json({status: "error"})
    }

}       
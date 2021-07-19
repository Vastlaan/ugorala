export default async function handler(req, res){

  try{
    const {menu, type} = req.body
    await Promise.all(menu.map(async (row)=>{
        const {id, heading, menu_item} = row
        const response = await fetch(`${process.env.STRAPI_URL}/${type}/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": req.headers.authorization
            },
            body: JSON.stringify({heading, menu_item})
        })
        const data = await response.json()
    }))

  res.status(200).json({status: "updated"})
  }catch(e){
    console.error(e)
    res.status(400).json({status: 'error', message: "Something went wrong"})
  }
}
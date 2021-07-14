

export default async function handler(req, res){

  try{
    const {newGallery} = req.body
    const {id} = newGallery

    console.log(newGallery, id)
  
    if(!newGallery || !id){
      throw new Error("newGalleries object must be defined")
    }

    const response = await fetch(`${process.env.STRAPI_URL}/galleries/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": req.headers.authorization
      },
      body: JSON.stringify({images: newGallery.images})
    })

    const data = await response.json()

    return res.status(200).json({status: 'success', message: "Successfully updated gallery!"})
  }catch(e){
    console.error(e)
    res.status(400).json({status: "error", message: "Something went wrong."})
  }

}
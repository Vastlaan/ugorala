import AWS from 'aws-sdk'

export default async function handler(req, res){

  const s3 = new AWS.S3({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const {oldImages} = req.body

  console.log(oldImages)

  const BUCKET = process.env.BUCKET_NAME.split('/')[0]

  try{
    await Promise.all(oldImages.map(async key =>{

      console.log(key)
      
      s3.deleteObject({Bucket: BUCKET, Key: key }, function(err, data){
        if(err){
          console.error(err)
          throw new Error('Failed')
        }else{
          console.log(data)
          console.log('Deleted')
        }

      })
    
    }))
  
    res.status(200).json({status: "Success"})

  }catch(e){
    console.log(e)
    res.status(400).json({error: "Couldn't delete old images"})
  }

}
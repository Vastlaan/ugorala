import AWS from "aws-sdk";
import multer from 'multer'
import multerS3 from 'multer-s3'
import runMiddleware from '../../utils/run_middleware';
import { validateMimeTypeMulter } from '../../validations';

export const config = {
    api: {
        bodyParser: false,
    },
};


export default async function handler(req, res){

    // setup aws-sdk
    const s3 = new AWS.S3({
        secretAccessKey: process.env.AWS_SECRET_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });
    // set fileName to undefined
    let fileName;
    try {
        // middleware function to execute
        const upload = multer({
            storage: multerS3({
                s3: s3,
                bucket: process.env.BUCKET_NAME,
                acl: "public-read",
                key: function (_req, file, cb) {
                    // create a file name, which we later use to append to url and save in database
                    fileName = `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.BUCKET_NAME}/${file.originalname}`
                    cb(
                        null,
                        file.originalname
                    );
                },
            }),
            fileFilter: function (_req, file, cb) {
                validateMimeTypeMulter(file, cb);
            },
        }).array("file", 1);

        // run middleware
        await runMiddleware(req, res, upload);

        res.status(200).json({status: "Success", fileName})

    }catch(e){
        console.error(e)
        res.status(400).json({status: 'error', message: "Something went wrong"})
    }





    
}
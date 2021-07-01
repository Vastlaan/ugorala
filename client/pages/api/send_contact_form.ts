import initMiddleware from '../../lib/init_middleware'
import validateMiddleware from '../../lib/validate_middleware'
import { check, validationResult } from 'express-validator'

const validateBody = initMiddleware(validateMiddleware([
    check('name').isLength({min: 2, max: 50}).withMessage('Name field must contain at least 2 and at most 50 characters.').trim().escape(),
    check('email').isEmail().withMessage('Email is invalid'),
    check('message').isLength({min: 3, max: 500}).withMessage('Message field must contain at least 3 and at most 500 characters.').trim().escape()
], validationResult))

export default async function handler(req, res){

    try{
        // run validation middleware
        const x = await validateBody(req, res)

        console.log(x)
    
        const {name, email, message} = req.body
    
        console.log(name, email, message)

        // send an email
    
        res.status(200).json({status: 'success'})
    }catch(e){
        console.error(e)
        res.status(500).json({status: 'error', errors: [{param: 'message', msg:"Ups, something went wrong on server side. Please try again later."}]})
    }

}
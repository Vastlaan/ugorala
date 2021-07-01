import initMiddleware from '../../lib/init_middleware'
import validateMiddleware from '../../lib/validate_middleware'
import { check, validationResult } from 'express-validator'

const validateBody = initMiddleware(validateMiddleware([
    check('persons').not().isEmpty().withMessage("Number of persons must be provided"),
    check('name').trim().isLength({min: 2, max: 50}).withMessage('Name field must contain at least 2 and at most 50 characters.').escape(),
    check('email').trim().isEmail().withMessage('Email is invalid'),
    check('phone').isLength({min: 8, max: 19}).withMessage("Valid phone number must be provided"),
    check('hour').not().isEmpty().withMessage('Please select an hour.'),
    check('chosenDate').not().isEmpty().withMessage('Please select the date.'),

], validationResult))

export default async function handler(req, res){

    try{
        // run validation middleware
        const x = await validateBody(req, res)

        console.log(x)

        const {persons, name, email, hour, chosenDate} = req.body
    
        console.log(persons, name, email, hour, chosenDate)

        // register reservation in the strapi
    
        res.status(200).json({status: 'success'})

    }catch(e){
        console.error(e)
        res.status(500).json({status: 'error', errors: [{param: 'message', msg:"Ups, something went wrong on server side. Please try again later."}]})
    }
}
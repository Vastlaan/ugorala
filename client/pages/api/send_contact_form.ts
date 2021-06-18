import initMiddleware from '../../lib/init_middleware'
import validateMiddleware from '../../lib/validate_middleware'
import { check, validationResult } from 'express-validator'

const validateBody = initMiddleware(validateMiddleware([
    check('name').isLength({min: 2, max: 50}),
    check('email').isEmail(),
    check('message').isLength({min: 3, max: 500})
], validationResult))

export default async function handler(req, res){
    await validateBody(req, res)

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({status: 'error', errors: errors.array()})
    }

    res.status(200).json({status: 'success'})


}
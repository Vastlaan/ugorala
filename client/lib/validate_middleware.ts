export default function validateMiddleware(validations, validationResults){
    return async (req, res, next) =>{
        await Promise.all(validations.map((validation)=>validation.run(req)))

        const errors = validationResults(req)

        if(errors.isEmpty()){
            return next()
        }

        res.status(422).json({status: 'error', errors: errors.array()})
    }
}
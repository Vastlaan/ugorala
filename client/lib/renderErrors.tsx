import React from "react"
import ErrorMessage from "../components/utils/errorMessage"

export default function renderErrors(errors:any[], field: string): React.ReactElement | null{
    const existingError = errors.find(err=>err.param===field)

    if(existingError){
        return <ErrorMessage message={existingError.msg} />
    }
    return null
}
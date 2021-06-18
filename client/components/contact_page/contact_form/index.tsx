import { useState } from 'react'
import styled from 'styled-components'
import { SectionNarrow, Heading3, ButtonPrimary } from '../../../styles'

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const response = await fetch('/api/send_contact_form', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name,email,message})
            })
            const data = await response.json()

            if(data.status==='error'){
                return setErrors(data.errors)
            }

            console.log(data)
        }catch(e){
            console.error(e)
        }
    }

    function renderErrors(errors, field){
        const existingError = errors.find(err=>err.param===field)

        if(existingError){
            return <small>{existingError.msg}</small>
        }
        return null
    }

    return (
        <SectionNarrow margin='4.7rem auto'>
            <Heading3 align='left' margin='0 0 2.7rem 0'>Contact Formulier</Heading3>
            <Form onSubmit={handleSubmit}>
                <Field>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' id='name' autoComplete='name' placeholder='Uw naam' value={name} onChange={(e)=>setName(e.target.value)}/>
                    {errors.length > 0 && renderErrors(errors, 'name') }
                </Field>
                <Field>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' id='email' autoComplete='email' placeholder='Uw email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {errors.length > 0 && renderErrors(errors, 'email') }
                </Field>
                <Field>
                    <label htmlFor="message">Bericht:</label>
                    <textarea name="message" id="message"  rows={5} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    {errors.length > 0 && renderErrors(errors, 'message') }
                </Field>
                <ButtonPrimary>Send</ButtonPrimary>
            </Form>
        </SectionNarrow>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Field = styled.div`
    margin: 1.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label{
        margin-bottom: .9rem;
        font-size: 1.9rem;
        color: ${p=>p.theme.grey4};

    }

    input, textarea{
        border: 1px solid rgba(0,0,0,.3);
        padding: .9rem 1.4rem;
        color: ${p=>p.theme.grey4};
        min-width: 35rem;

        &:active, :focus{
            border: 1px solid ${p=>p.theme.tertiary};
            box-shadow: 0 0 0 transparent;
        }
    }
`

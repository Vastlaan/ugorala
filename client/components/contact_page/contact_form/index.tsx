import { useState } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../../utils/errorMessage'
import { ConatinerNarrow, Heading3, TextSmall, ButtonFull } from '../../../styles'

interface DisclaimerStyleProps{
    selected?: boolean
}

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState(false)
    const [errors, setErrors] = useState([])

    async function handleSubmit(e){
        e.preventDefault()

        if(!selected){
            return setErrors([{param: 'disclaimer', msg: 'Please agree to the terms and conditions.'}])
        }

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
            return <ErrorMessage message={existingError.msg} />
        }
        return null
    }

    return (

        <Section>

            <ConatinerNarrow>
                <FormContainer>
                    <Heading3  color="snow" align='left'>Contact Formulier</Heading3>
                    <TextSmall color="snow" align='left' margin='2.7rem 0 1.4rem 0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque omnis ducimus tempora fuga autem officiis.</TextSmall>
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
                            <textarea name="message" id="message" placeholder='Uw bericht' rows={5} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            {errors.length > 0 && renderErrors(errors, 'message') }
                        </Field>
                        <DisclaimerField selected={selected}>
                            <input
                                type="checkbox"
                                id="disclaimer"
                                name="disclaimer"
                                checked={selected}
                                onChange={(e) => setSelected(prevState=>!prevState)}
                            />
                            <p>
                            Ik ga akkoord met de verwerking van persoonsgegevens in dit formulier in overeenstemming met de Wet bescherming persoonsgegevens in verband met het verzenden van een aanvraag via het contactformulier.
                            </p>        
                        </DisclaimerField>
                        {errors.length > 0 && renderErrors(errors, 'disclaimer') }
                        <ButtonFull type='submit' width='25rem'>Send</ButtonFull>
                    </Form>
                </FormContainer>
            </ConatinerNarrow>
        </Section>
    )
}

const Section = styled.section`
    background-color: ${p=>p.theme.black};

`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.7rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Field = styled.div`
    margin: 1.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label{
        margin-bottom: .9rem;
        font-size: 1.9rem;
        color: ${p=>p.theme.grey1};

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
const DisclaimerField = styled.div<DisclaimerStyleProps>`
    width: 100%;
    max-width: 65rem;
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
    padding: 1.4rem;
    border: 1px solid ${p=>p.selected?'forestgreen':p.theme.primary};
    input{
      align-self: flex-start;
      margin: 1.4rem;
      border: 1px solid ${p=>p.theme.primary};
    }
    p{
      font-size: 1.2rem;
      color: ${(p) => p.theme.grey3};
    }
`
import { Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {Heading6,fonts} from '../../../styles'

interface PersonalDetailsProps{
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
}

export default function PersonalDetailsComponent({name, setName, email, setEmail, phone, setPhone}: PersonalDetailsProps) {

    return (
        <PersonalDetails>
            <Heading6>Personlijke gegevens:</Heading6>
            <Field>
                <label htmlFor="name">Full Name:</label>
                <input type="text" name='name' id="reservation_name" value={name} onChange={e=>setName(e.target.value)} />
            </Field>
            <Field>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name='email' id="reservation_email" value={email} onChange={e=>setEmail(e.target.value)} />
            </Field>
            <Field>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name='phone' id="reservation_phone" value={phone} onChange={e=>setPhone(e.target.value)} />
            </Field>
        </PersonalDetails>
)
}
const PersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: details;
    margin: 2.7rem 0;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.4rem 0;

    label{
        font-size: 1.9rem;
        font-family: ${fonts.heading};
        margin-bottom: .9rem;
        color: ${p=>p.theme.grey4};
    }

    input{
        padding: .9rem 1.4rem;
        border: 1px solid rgba(0,0,0,.3);
        min-width: 35rem;
    }
`
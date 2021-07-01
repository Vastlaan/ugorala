import {useState} from 'react'
import {DateTime} from 'luxon'
import styled from 'styled-components'
import Persons from './persons'
import Calendar from './calendar'
import PersonalDetails from './personal_details'
import Hour from './hour'
import { respond, SectionNarrow, HeadingContainer, Heading2, ButtonPrimary} from "../../../styles"
import { IChosenDate } from '../../../types'
import ErrorMessage from '../../utils/errorMessage'


export default function ReservationComponent() {

    const [persons, setPersons] = useState(2)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [hour, setHour] = useState('')
    const [chosenDate, setChosenDate] = useState<IChosenDate>()
    const [date, setDate] = useState(DateTime.now())
    const [errors, setErrors] = useState([])

    async function handleReservation(e){
        e.preventDefault()
        setErrors([])
        console.log('Here: ',persons, name, hour, email, phone, chosenDate)

        const dataToSend = {
            persons,
            name, 
            hour,
            email, 
            phone,
            chosenDate
        }

        try{
            const response = await fetch('/api/submit_reservation',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            })
            const data = await response.json()
    
            if(data.status==='error'){
                return setErrors(data.errors)
            }

            // display successful modal
            console.log(data)

        }catch(e){
            console.error(e)
        }
    }

    return (
        <SectionNarrow margin='2.7rem auto 4.7rem auto'>
            <HeadingContainer>
                <Heading2 color='#222'>Tafel reserveren</Heading2>
            </HeadingContainer>
            <GridForm onSubmit={(e)=>handleReservation(e)}>

                <Calendar date={date} setDate={setDate} chosenDate={chosenDate} setChosenDate={setChosenDate} errors={errors} />
                
                <Hour hour={hour} setHour={setHour} errors={errors} />

                <Persons persons={persons} setPersons={setPersons} errors={errors}/>
                <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} errors={errors} />

                <ButtonPrimary margin="2.7rem 0" area='btn' type='submit'>Reserveren</ButtonPrimary>
            </GridForm>
        </SectionNarrow>
    )
}

const GridForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4.7rem;

    ${()=>respond('m', `
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 2.7rem;
        grid-template-areas:
            "cal person"
            "cal details"
            "hour details"
            "btn .";

    `)}
`

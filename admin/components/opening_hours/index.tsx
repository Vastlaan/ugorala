import {useState, useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../../globals/stateProvider'
import Row from './row'
import {SectionNarrow, Heading3, TextStrong, ButtonPrimary} from '../../styles'


export default function OpeningHoursComponent({opening_hours}) {

    const [newHours, setNewHours] = useState(opening_hours||[])

    const {user} = useContext(Context)

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const response = await fetch('/api/update_opening_hours', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.jwt}`
                },
                body: JSON.stringify({newHours})
            })
    
            const data = await response.json()
        }catch(e){
            console.error(e)
        }


    }

    return (
        <SectionNarrow margin='4.7rem auto'>
            <Heading3 margin="2.7rem 0" width="fit-content">Opening hours</Heading3>

            <Fields>
                <TextStrong align='left' margin='.6rem 1.4rem'>Dag:</TextStrong>
                <TextStrong align='left' margin='.6rem 1.4rem'>Open van:</TextStrong>
                <TextStrong align='left' margin='.6rem 1.4rem'>Open tot:</TextStrong>
            </Fields>

            <form onSubmit={handleSubmit}>

                {
                    newHours.map((row,i)=>{
                        return(
                            <Fields key={i}>
                                <input type="text" name={`day-${i}`} id={`day-${i}`} value={row.day} readOnly/>
                                <input type="text" name={`start-${i}`} id={`start-${i}`} value={row.start} onChange={e=>{
                                    const newState = [...newHours]
                                    const index = newState.findIndex(field=>field.day===row.day)
                                    newState[index].start = e.target.value
                                    return setNewHours(newState)
                                }} />
                                <input type="text" name={`end-${i}`} id={`end-${i}`} value={row.end} onChange={e=>{
                                    const newState = [...newHours]
                                    const index = newState.findIndex(field=>field.day===row.day)
                                    newState[index].end = e.target.value
                                    return setNewHours(newState)
                                }} />    
                            </Fields>
                        )
                    })
                }
                <ButtonPrimary margin='1.4rem 0'>Update opening hours</ButtonPrimary>
            </form>

        </SectionNarrow>
    )
}

const Fields = styled.div`
    display: grid;
    grid-template-columns: 1fr 15rem 15rem;
    grid-gap: 1.4rem;
    background-color: ${p=>p.theme.grey2};

    input{
        margin: 1.4rem;
        padding: .3rem 1.4rem;
        color: ${p=>p.theme.grey4};
    }

`
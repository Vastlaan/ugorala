import {useState, useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../../globals/stateProvider'
import Modal from '../modals/confirmation'
import Gate from '../modals/gate'
import {ContainerNarrow, Heading3, TextStrong, Text, ButtonPrimary} from '../../styles'


export default function OpeningHoursComponent({opening_hours}) {

    const [newHours, setNewHours] = useState(opening_hours||[])
    const [displayModal, setDisplayModal] = useState(false)
    const [displayGate, setDisplayGate] = useState(false)

    const {user} = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()
        setDisplayGate(true)
    }

    async function updateOpeningHours(){
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

            if(data.status==='error'){
                // set errors handling here
                return
            }
            // display modal 
            setDisplayModal(true)
        }catch(e){
            console.error(e)
        }
    }

    return (
        <ContainerNarrow margin='4.7rem 0'>
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
                                <TextStrong align='left'>{row.day}</TextStrong>
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

            {
                displayModal && <Modal setDisplayModal={setDisplayModal} message='Your data has been successfully uploaded!' />
            }
            {
                displayGate && <Gate setDisplayGate={setDisplayGate} message='Are your sure you want to update Opening Hours?' cb={updateOpeningHours} />
            }
        </ContainerNarrow>
    )
}

const Fields = styled.div`
    display: grid;
    grid-template-columns: 1fr 15rem 15rem;
    grid-gap: 1.4rem;
    background-color: ${p=>p.theme.grey2};
    padding: 1.3rem;

    input{
        margin: 1.4rem 0;
        padding: .3rem 1.4rem;
        color: ${p=>p.theme.grey4};
    }

`
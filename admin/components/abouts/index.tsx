import {useState, useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import Modal from '../modals/confirmation'
import { ContainerNarrow, Heading3, ButtonPrimary, ContentContainer, TextStrong } from '../../styles'

export default function AboutsComponent({abouts}) {

    const {user} = useContext(Context)

    const [newAbouts, setNewAbouts] = useState(abouts||[])
    const [displayModal, setDisplayModal] = useState(false)

    async function updateAbouts(e){
        e.preventDefault()

        try{
            const response = await fetch('/api/update_abouts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.jwt}`
                },
                body: JSON.stringify({newAbouts})
            })

            const data = await response.json()

            if(data.status==='error'){

                // set up some errors
                return
            }
            // display confiramtion modal and refresh page
            setDisplayModal(true)

        }catch(e){
            console.error(e)
        }
    }

    return (
        <ContainerNarrow margin='4.7rem 0'>
            <Heading3 margin="2.7rem 0" width="fit-content">Abouts</Heading3>

            <form onSubmit={updateAbouts}>

                {newAbouts.map((about, i)=>{
                    return(
                        <ContentContainer  key={`about-${i}`}> 
                            <label htmlFor={`heading-${i}`}><TextStrong>Heading:</TextStrong></label>
                            <input type="text" name={`heading-${i}`} id={`heading-${i}`} value={about.heading} onChange={(e)=>{
                                const newState = [...abouts]
                                newState[i].heading = e.target.value
                                setNewAbouts(newState)
                            }} />
                            <label htmlFor={`heading-${i}`}><TextStrong>Text:</TextStrong></label>
                            <textarea name={`text-${i}`} id={`text-${i}`} rows={5} value={about.text} onChange={(e)=>{
                                const newState = [...abouts]
                                newState[i].text = e.target.value
                                setNewAbouts(newState)
                            }}></textarea>
                        
                        </ContentContainer>
                    )
                })}
                <ButtonPrimary margin='1.4rem 0'>Update Abouts</ButtonPrimary>
            </form>

            {
                displayModal && <Modal setDisplayModal={setDisplayModal} message='Your data has been successfully uploaded!' />
            }

        </ContainerNarrow>
    )
}

import {useState, useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import Story from './story'
import Modal from '../modals/confirmation'
import { ContainerNarrow, Heading3, ButtonPrimary } from "../../styles"

export default function StoriesComponent({stories}) {

    const {user} = useContext(Context)

    const [newStories, setNewStories] = useState(stories||[])
    const [displayModal, setDisplayModal] = useState(false)

    async function updateStories(e){
        e.preventDefault()

        try{
            const response = await fetch('/api/update_stories', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.jwt}`
                },
                body: JSON.stringify({newStories})
            })
            const data = await response.json()

            if(data.status === 'error'){
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
            <Heading3 margin="2.7rem 0" width="fit-content">Stories</Heading3>

            <form onSubmit={updateStories}>

                {newStories.map((story, i)=>{
                    return(
                        <Story key={`story-${i}`} i={i} story={story} newStories={newStories} setNewStories={setNewStories} />
                    )
                })}
                <ButtonPrimary margin='1.4rem 0'>Update Stories</ButtonPrimary>
            </form>
            {
                displayModal && <Modal setDisplayModal={setDisplayModal} message='Your data has been successfully uploaded!' />
            }
        </ContainerNarrow>
    )
}

import {useState, useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import Story from './story'
import Modal from '../modals/confirmation'
import Gate from '../modals/gate'
import { ContainerNarrow, Heading3, ButtonPrimary } from "../../styles"

export default function StoriesComponent({stories}) {

    const {user} = useContext(Context)

    const [newStories, setNewStories] = useState(stories||[])
    const [displayModal, setDisplayModal] = useState(false)
    const [displayGate, setDisplayGate] = useState(false)
    const [oldImages, setOldImages] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setDisplayGate(true)
    }

    async function updateStories(){

        try{
            console.log(oldImages)
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

            // delete old files
            const responseDelete = await fetch('/api/delete_old_images',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({oldImages})
            })

            const dataDelete = await responseDelete.json()

            if(dataDelete.error){
                // setup some error
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

            <form onSubmit={handleSubmit}>

                {newStories.map((story, i)=>{

                    return(
                        <Story key={`story-${i}`} i={i} story={story} newStories={newStories} setNewStories={setNewStories} oldImages={oldImages} setOldImages={setOldImages} />
                    )
                })}
                <ButtonPrimary margin='1.4rem 0'>Update Stories</ButtonPrimary>
            </form>
            {
                displayModal && <Modal setDisplayModal={setDisplayModal} message='Your data has been successfully uploaded!' />
            }
            {
                displayGate && <Gate setDisplayGate={setDisplayGate} message='Are your sure you want to update Stories?' cb={updateStories} />
            }
        </ContainerNarrow>
    )
}

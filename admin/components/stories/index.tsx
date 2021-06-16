import {useState, useContext} from 'react'
import Image from 'next/image'
import {Context} from '../../globals/stateProvider'
import Story from './story'
import { SectionNarrow, Heading3, TextStrong, ButtonPrimary } from "../../styles"

export default function StoriesComponent({stories}) {

    const {user} = useContext(Context)

    const [newStories, setNewStories] = useState(stories)
    console.log(stories)

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
            const data = response.json()
        }catch(e){
            console.error(e)

        }

    }

    return (
        <SectionNarrow margin='4.7rem auto'>
            <Heading3 margin="2.7rem 0" width="fit-content">Stories</Heading3>

            <form onSubmit={updateStories}>

                {newStories.map((story, i)=>{
                    return(
                        <Story key={`story-${i}`} i={i} story={story} newStories={newStories} setNewStories={setNewStories} />
                    )
                })}
                <ButtonPrimary margin='1.4rem 0'>Update Stories</ButtonPrimary>
            </form>
        </SectionNarrow>
    )
}

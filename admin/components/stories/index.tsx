import {useState, useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import styled from 'styled-components'
import { SectionNarrow, Heading3, TextStrong, ButtonPrimary } from "../../styles"

export default function StoriesComponent({stories}) {

    const {user} = useContext(Context)

    const [newStories, setNewStories] = useState(stories)

    console.log(user.jwt)

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
                        <Story key={`story-${i}`}>
                            <label htmlFor="heading"><TextStrong>Heading:</TextStrong></label>
                            <input type="text" name='heading' value={story.heading} onChange={(e)=>{
                                const newState = [...newStories]
                                newState[i].heading = e.target.value
                                return setNewStories(newState)
                            }} />
                            <label htmlFor="imgUrl"><TextStrong>Image Url:</TextStrong></label>
                            <input type="text" name='imgUrl' value={story.imgUrl} onChange={(e)=>{
                                const newState = [...newStories]
                                newState[i].imgUrl = e.target.value
                                return setNewStories(newState)
                            }} />
                            <TextStrong>Paragraphs:</TextStrong>
                            {story.paragraphs.map((para,index) => {
                                return(
                                    <textarea key={index} name={`para-${i}`} value={para.text} onChange={e=>{
                                        const newState = [...newStories]
                                        newState[i].paragraphs[index].text = e.target.value
                                        return setNewStories(newState)
                                    }}>
                                    </textarea>
                                )
                            })}
                        </Story>
                    )
                })}
                <ButtonPrimary margin='1.4rem 0'>Update Stories</ButtonPrimary>
            </form>
        </SectionNarrow>
    )
}

const Story = styled.div`
    margin: 1.4rem 0;
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${p=>p.theme.grey2};

    input, textarea{
        margin: 1.4rem;
        padding: .3rem .9rem;
        align-self: stretch;
    }
`

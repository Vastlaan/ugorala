import {useState} from 'react'
import styled from 'styled-components'
import Heading from './heading'
import Image from './image'
import Paragraphs from './paragraphs'
import {TextStrong} from "../../../styles"

export default function StoryComponent({i, story, newStories, setNewStories}) {
    
    return (
        <Story>
            
            <Heading newStories={newStories} setNewStories={setNewStories} i={i} heading={story.heading} />

            <Image newStories={newStories} setNewStories={setNewStories} i={i} imgUrl={story.imgUrl} />
            
            <Paragraphs newStories={newStories} setNewStories={setNewStories} i={i} paragraphs={story.paragraphs} />
            
        </Story>
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

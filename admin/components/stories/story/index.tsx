import Heading from './heading'
import Image from './image'
import Paragraphs from './paragraphs'
import {ContentContainer} from "../../../styles"

export default function StoryComponent({i, story, newStories, setNewStories}) {
    
    return (
        <ContentContainer>
            
            <Heading newStories={newStories} setNewStories={setNewStories} i={i} heading={story.heading} />

            <Image newStories={newStories} setNewStories={setNewStories} i={i} imgUrl={story.imgUrl} />
            
            <Paragraphs newStories={newStories} setNewStories={setNewStories} i={i} paragraphs={story.paragraphs} />
            
        </ContentContainer>
    )
}
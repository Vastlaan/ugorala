import {useContext} from 'react'
import {Context} from '../../store'
import Story from '../utils/story'

export default function ContactPageComponent() {

    const {state: {landing_page: { stories }}} = useContext(Context)
    
    return (
        <>
            {
            stories.length > 0 && <Story 
                heading={stories[0].heading}
                imgUrl={stories[0].imgUrl}
                paragraphs={stories[0].paragraphs.map(para=>para.text)} />
            }
        </>
    )
}

import {FlexCol} from '../../../styles'

export default function ParagraphsComponent({newStories, setNewStories, i, paragraphs}) {
    return (
        <FlexCol align='flex-start' justify='flex-start' width='100%'>
            {paragraphs.map((para,index) => {
                return(
                    <textarea rows={5} key={index} name={`para-${i}`} value={para.text} onChange={e=>{
                        const newState = [...newStories]
                        newState[i].paragraphs[index].text = e.target.value
                        return setNewStories(newState)
                    }}>
                    </textarea>
                )
            })}
        </FlexCol>
    )
}

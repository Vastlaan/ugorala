import {FlexCol, TextStrong} from '../../../styles'

export default function HeadingComponent({newStories, setNewStories, i, heading}) {
    return (
        <FlexCol align='flex-start' justify='flex-start' width='100%'>
            <label htmlFor="heading"><TextStrong>Heading:</TextStrong></label>
            <input type="text" name='heading' value={heading} onChange={(e)=>{
                const newState = [...newStories]
                newState[i].heading = e.target.value
                return setNewStories(newState)
            }} />
        </FlexCol>
    )
}

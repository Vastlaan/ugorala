import {useContext} from 'react'
import {Context} from '../../store'
import {FlexCol, Heading6, TextStrong} from '../../styles'

export default function ServicesComponent() {

    const {state} = useContext(Context)

    const {landing_page:{opening_hours}} = state

    return (
        <FlexCol align='flex-start'>
            <Heading6 color='#fefefe' margin='0 0 2.7rem 0'>Openingstijden</Heading6>
            {opening_hours.map((row, i)=>{
                return(
                    <TextStrong key={`${row.day}-${i}`} margin='.5rem 0' color='#fdf8ec'>{row.day}: {row.start}-{row.end}</TextStrong>
                )
            })}
        </FlexCol>
    )
}
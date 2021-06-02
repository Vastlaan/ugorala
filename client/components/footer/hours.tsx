import Link from 'next/link';
import styled from 'styled-components'
import {FlexCol, Heading3, TextStrong} from '../../styles'

export default function ServicesComponent() {
    return (
        <FlexCol align='flex-start'>
            <Heading3 color='#fefefe' margin='0 0 2.7rem 0'>{data.heading}</Heading3>
            {data.list.map((item, i)=>{
                return(
                    <TextStrong key={`${item.day}-${i}`} margin='.5rem 0' color='#fdf8ec'>{item.day}: {item.start}-{item.end}</TextStrong>
                )
            })}
        </FlexCol>
    )
}
const data= {
    heading: 'Openingstijden',
    list: [
        {day: 'Woensdag', start: '16:00', end: "22:00"},
        {day: 'Donderdag', start: '16:00', end: "22:00"},
        {day: 'Vrijdag', start: '16:00', end: "24:00"},
        {day: 'Zaterdag', start: '16:00', end: "24:00"},
        {day: 'Zondag', start: '16:00', end: "24:00"},
    ]
}
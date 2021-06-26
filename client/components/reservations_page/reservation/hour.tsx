import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Heading6, FlexRow } from '../../../styles'

const HOURS = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']

interface HoursProps{
    hour: string;
    setHour: Dispatch<SetStateAction<string>>;
}

export default function HoursComponent({setHour, hour}:HoursProps) {
    return (
        <Hour>
            <Heading6>Tijd:</Heading6>
            <FlexRow wrap='wrap' justify='flex-start'>
                {HOURS.map(h=>{
                    return(
                        <Time type='button'  key={`time-${h}`} onClick={(e)=>setHour(h)} color={hour===h?'#8c271e':''}>{h}</Time>
                    )
                })}
            </FlexRow>
        </Hour>
    )
}

const Hour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: hour;
    margin: 2.7rem 0;
`
const Time = styled.button`
    margin: 1.4rem 1.4rem 1.4rem 0;
    font-size: 1.6rem;
    padding: .6rem .9rem;
    border: 1px solid rgba(0,0,0,.3);
    background-color: ${p=>p.color?p.color:'transparent'};
    color: ${p=>p.color?p.theme.white:p.theme.grey4};
`

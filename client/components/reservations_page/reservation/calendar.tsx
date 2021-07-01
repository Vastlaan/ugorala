import { Dispatch, SetStateAction } from 'react'
import {DateTime} from 'luxon'
import styled from 'styled-components'
import { fonts, Heading6 } from '../../../styles'
import { WEEK_DAYS } from '../../../lib/weekdays'
import {FlexibleComponentProps, IChosenDate} from '../../../types'
import renderErrors from '../../../lib/renderErrors'

interface CalendarProps{
    date: any;
    setDate: Dispatch<any>;
    chosenDate: IChosenDate;
    setChosenDate: Dispatch<SetStateAction<IChosenDate>>
    errors: any[]
}

export default function CalendarComponent({date, setDate, chosenDate, setChosenDate, errors}:CalendarProps) {

    function renderDays(){
        const startDay = date.startOf('month').weekday      
        const daysInMonth = []
        
        for(let i=1; i < startDay; i++){
            daysInMonth.push(<EmptyDay key={`empty-day-${i}`}/>)
        }
        for(let i = 1; i <= date.daysInMonth; i++){
            if(i === (9-startDay) || i === (16-startDay) || i===(23-startDay) || i===(30-startDay) || (i <= date.day && date.month === DateTime.now().month)){
                daysInMonth.push(
                    <EmptyDay 
                        type='button' 
                        key={`day-${i}`} 
                        color={date.day === i? "#ddd":""}
                    >
                        {i}
                    </EmptyDay>
                )
            }else{
                daysInMonth.push(
                    <Day 
                        type='button' 
                        key={`day-${i}`} 
                        onClick={()=>setChosenDate({day: +i, month: +date.month, year: +date.year})}
                        color={ chosenDate && (chosenDate.day===i && chosenDate.month===date.month)?"#8c271e":date.day === i? "#ddd":""}
                    >
                        {i}
                    </Day>
                )
            }
        }
        return daysInMonth
    }

    return (
        <Calendar>
          <Heading6 align='left' margin='0 0 1.4rem 0'>Datum:</Heading6>
          <Grid>
            <Control>
                <button type='button' onClick={()=>date.month > DateTime.now().month && setDate(date.minus({month: 1}))}>{'<'}</button>
                <span>{date.monthLong}-{date.year}</span>
                <button type='button' onClick={()=>setDate(date.plus({month: 1}))}>{'>'}</button>
            </Control>
            {WEEK_DAYS.map((weekday,i)=><Weekday color={weekday==="Maandag"?"#aaa":""} key={`weekday-${weekday}`}>{weekday.substring(0,2)}</Weekday>)}
            {renderDays()}
          </Grid>
          {errors.length > 0 && renderErrors(errors, 'chosenDate') }
        </Calendar>
    )
}
const Calendar = styled.div`
    grid-area: cal;
    margin: 2.7rem 0;

`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 5rem);
`
const Control = styled.div`
    grid-column: 1/8;
    background-color:${p=>p.theme.primary};
    color: ${p=>p.theme.grey1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.9rem;
    font-family: ${fonts.heading};

    button{
        background-color: transparent;
        border: none;
        color: ${p=>p.theme.grey1};
        font-size: 1.9rem;
        padding:.6rem 1.4rem;
    }
`
const Weekday = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.grey1};
    padding: .6rem;
    border: 1px solid rgba(0,0,0,.3);
    background-color: ${p=>p.color?p.color:p.theme.tertiary};

`
const Day = styled.button<FlexibleComponentProps>`
    padding: .6rem;
    border: 1px solid rgba(0,0,0,.3);
    background-color: ${p=>p.color?p.color:p.theme.grey2};
    transition: all .3s;
    color: ${p=>p.color?p.theme.white: p.theme.black};

    &:hover{
        background-color: ${p=>p.color?p.color:p.theme.grey3}
    }
`
const EmptyDay = styled.button<FlexibleComponentProps>`
    padding: .6rem;
    border: 1px solid rgba(0,0,0,.3);
    background-color: ${p=>p.color?p.color:'#ccc'};
    color: ${p=>p.theme.grey1};
    cursor: not-allowed;
`
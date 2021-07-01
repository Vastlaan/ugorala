import { Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {Heading6, FlexRow, } from "../../../styles"
import {FlexibleComponentProps} from '../../../types'
import renderErrors from '../../../lib/renderErrors'

interface PersonsProps{
    persons: number;
    setPersons: Dispatch<SetStateAction<number>>;
    errors: any[]
}

const PERSONS_CHOICE = [1,2,3,4,5,6]

export default function PersonsComponent({persons, setPersons, errors}: PersonsProps ) {
    return (
        <Person>
            <Heading6>Hoeveel personen:</Heading6>
            <FlexRow justify='flex-start' margin='1.4rem 0'>
                {PERSONS_CHOICE.map(number=>{
                    return(
                        <Number type='button' key={number} onClick={()=>setPersons(number)} color={persons===number?'#8c271e':''}>{number}</Number>
                    )
                })}
            </FlexRow>
            {errors.length > 0 && renderErrors(errors, 'persons') }
        </Person>
    )
}
const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: person;
    margin: 2.7rem 0;
`
const Number = styled.button<FlexibleComponentProps>`
    border: 1px solid ${p=>p.color?p.color:p.theme.grey4};
    background-color: ${p=>p.color?p.theme.primary:'transparent'};
    padding: .9rem 1.4rem;
    margin: 1.4rem 1.4rem 1.4rem 0;
    font-size: 1.9rem;
    color: ${p=>p.color?p.theme.white:p.theme.grey4};
`
import styled from 'styled-components'
import Link from 'next/link'
import { respond, fonts, Heading3, TextMini, ButtonFull } from "../../../styles"

export default function CardComponent({heading, icon, price,text, items }) {
    return (
        <Card>
            <Heading3 color='snow' margin='0 1.4rem' align='center'>{heading}</Heading3>
            <Icon>
                {icon}
            </Icon>
            <Price>
                &euro;{price}
                <span> /per kg</span>
            </Price>
            <TextMini color='snow' margin='1.4rem'>{text}</TextMini>
            <Items>
                {items.map((item,i)=><li key={`item-${i}`}>{item}</li>)}
            </Items>
            <Link href='/contact'>
                <ButtonFull margin="auto 0 0 0">Bestellen</ButtonFull>
            </Link>
        </Card>
    )
}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 45rem;
    padding: 2.7rem 0;
    border: 3px solid ${p=>p.theme.secondary};
    background-color: ${p=>p.theme.black};
    box-shadow: 0 0 1rem rgba(0,0,0,.9);

    ${()=>respond('m', 'max-width: 30rem;')}

`
const Icon = styled.div`
    margin: 1.4rem 2.7rem;
    font-size: 4.7rem;
    line-height: 1;
    display: flex;
    align-items: center;
    color: ${p=>p.theme.secondary};
`
const Price = styled.h6`
    margin: 0 2.7rem;
    line-height: 1.3;
    font-size: 4.7rem;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.white};
    
    span{
        font-size: 1.6rem;
        font-weight: 300;
        font-family: ${fonts.heading};
        color: ${p=>p.theme.secondary};
    }
`
const Items = styled.ul`
    list-style: none;
    margin: 1.4rem 0 2.7rem 0;
    width:100%;

    li{
        padding: 1.4rem 2.7rem;
        border-top: 1px solid ${p=>p.theme.secondary};
        font-family: ${fonts.heading};
        font-size: 1.9rem;
        text-align: center;
        color: ${p=>p.theme.white};
        font-weight: 300;
        letter-spacing: .15rem;
    }
`
import {useContext} from 'react'
import Image from 'next/image'
import {Context} from '../../globals/stateProvider'
import styled from 'styled-components'
import {ButtonLink, Line} from '../../styles'

export default function MenuComponent() {

    const {setSectionToRender} = useContext(Context)

    return (
        <Menu>
            <Image src='/img/logo-white.svg' alt='logo' width='148' height='96' />
            <Line width='100%' color='snow'/>
            <ButtonLink onClick={()=>setSectionToRender('stories')} color='snow'><li>Stories</li></ButtonLink>
            <ButtonLink onClick={()=>setSectionToRender('abouts')} color='snow'><li>Abouts</li></ButtonLink>
            <ButtonLink onClick={()=>setSectionToRender('opening_hours')} color='snow'><li>Opening Hours</li></ButtonLink>
           
        </Menu>
    )
}

const Menu = styled.ul`
    position: sticky;
    top: 0;
    padding: 2.7rem 0;
    background-color: ${p=>p.theme.black};
    display: flex;
    flex-direction: column;
    list-style: none;

    li{
        padding: 1.4rem;
        color: ${p=>p.theme.white};
        font-size: 1.9rem;
        border-bottom: 1px solid rgba(255,255,255,.3);
    }
`
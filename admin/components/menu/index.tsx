import {useContext} from 'react'
import Image from 'next/image'
import {Context} from '../../globals/stateProvider'
import styled from 'styled-components'
import {ButtonLink, Line} from '../../styles'

export default function MenuComponent() {

    const {setSectionToRender} = useContext(Context)

    return (
        <Menu>
            <ImageContainer>
                <Image src='/img/logo.svg' alt='logo' width='148' height='96' />
            </ImageContainer>
            <ButtonLink onClick={()=>setSectionToRender('stories')} color='black'><li>Stories</li></ButtonLink>
            <ButtonLink onClick={()=>setSectionToRender('abouts')} color='black'><li>Abouts</li></ButtonLink>
            <ButtonLink onClick={()=>setSectionToRender('opening_hours')} color='black'><li>Opening Hours</li></ButtonLink>
           
        </Menu>
    )
}

const Menu = styled.ul`
    position: sticky;
    top: 0;
    padding: 2.7rem 0;
    background-color: ${p=>p.theme.grey2};
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 4.2rem;

    li{
        padding: 1.4rem;
        color: ${p=>p.theme.black};
        font-size: 1.9rem;
        border-bottom: 1px solid rgba(0,0,0,.6);
        transition: all .3s;

        &:hover{
            background-color: ${p=>p.theme.black};
            color: ${p=>p.theme.white};
        }
    }
`

const ImageContainer = styled.div`
    padding: 1.4rem;
    border-bottom: 1px solid rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

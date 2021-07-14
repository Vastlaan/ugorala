import {useContext} from 'react'
import Image from 'next/image'
import {Context} from '../../globals/stateProvider'
import styled from 'styled-components'
import {respond, ButtonLink, Line} from '../../styles'

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
            <ButtonLink onClick={()=>setSectionToRender('galleries')} color='black'><li>Galleries</li></ButtonLink>
           
        </Menu>
    )
}

const Menu = styled.ul`
    
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.4rem 0;
    background-color: ${p=>p.theme.black};
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: 4.2rem;
    z-index: 99;

    ${(p)=>respond('m',`
        position: sticky;
        top: 0;
        background-color: ${p.theme.grey2};
        flex-direction: column;
        justify-content: flex-start;
        width: auto;
        padding: 2.7rem 0;
        z-index: 1;
    `)}

    li{
        padding: 1.4rem;
        font-size: 1.9rem;
        color: ${p=>p.theme.white};
        transition: all .3s;
        
        ${p=>respond('m',`
            color: ${p.theme.black};
            border-bottom: 1px solid rgba(0,0,0,.6);
        `)}

        &:hover{
            background-color: ${p=>p.theme.grey4};
            color: ${p=>p.theme.white};
        }
    }
`

const ImageContainer = styled.div`
    padding: 1.4rem;
    border-bottom: 1px solid rgba(0,0,0,.6);
    display: none;
    justify-content: center;
    align-items: center;

    ${respond('m','display: flex;')}
`

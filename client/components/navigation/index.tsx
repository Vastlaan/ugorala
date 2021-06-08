import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'
import Action from './action'
import MenuButton from './menu_button'
import {ConatinerNarrow, respond} from '../../styles'

interface MenuConatierProps{
    isOpen: boolean;
}

export default function NavigationComponent() {

    const [isOpen, setIsOpen] = useState(false)
    const [isSmall, setIsSmall] = useState(false)

    useEffect(()=>{
        function switchSize(){
            console.log(window.innerWidth <= 768)
            return window.innerWidth <= 768 ? setIsSmall(true): setIsSmall(false)
        }
        window.addEventListener('resize',switchSize)
        switchSize()

        return ()=>window.removeEventListener('resize', switchSize)
    })

    return (
        <Navigation>
          <ConatinerNarrow>
            <Content>

                <Logo/>

                <MenuContainer isOpen={isOpen}>
                    <Menu />
                    <Action />
                </MenuContainer>

                {isSmall && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>}
                
            </Content>
          </ConatinerNarrow>   
        </Navigation>
    )
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${p=>p.theme.white};
    padding: .6rem 1.4rem;
    box-shadow: 0 .2rem .3rem rgba(0,0,0,.2);
    z-index: 99;

`

const Content = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    width: 100%;
    position: relative;
`

const MenuContainer = styled.div<MenuConatierProps>`
    position: absolute;
    top: 100%;
    right: ${p=>p.isOpen?'-1.4rem': '-120%'};
    width: 100vw;
    background-color: ${p=>p.theme.white};
    display: flex;
    flex-direction: column;
    padding: 2.7rem;
    transition: all .3s;

    ${()=>respond('m',`
        position: static;
        flex-direction: row;
        aling-items: center;
        justify-content: space-between;
        width: auto;
        flex-grow:1;
        background-color: transparent;
        padding: 0;

    `)}
`
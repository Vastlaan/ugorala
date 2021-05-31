import Link from 'next/link'
import styled from 'styled-components'
import {fonts} from '../../styles'
import { FlexibleComponentProps } from '../../types'

export default function MenuComponent() {
    return (
        <Menu>
            <li>
                <Link href='/'>
                    <MenuLink>Menukaart</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <MenuLink>Destillerderij</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <MenuLink>Vleeswaren</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <MenuLink>Catering</MenuLink>
                </Link>
            </li>
        </Menu>
    )
}

const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-itmes: center;
    justify-content: center;
    flex: 1;
    padding: 0 1.4rem;
`
const MenuLink = styled.button<FlexibleComponentProps>`
    margin: ${p=>p.margin?p.margin: '0 1.4rem'};
    padding: .9rem 0;
    border: none;
    background-color: transparent;
    color: ${p=>p.theme.black};
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    letter-spacing: .15rem;
    text-transform: uppercase;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: -10rem;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${p=>p.theme.primary};
        transition: all .3s;
    }

    &:hover{
        &::before{
            top: 0;
        }
    }

`
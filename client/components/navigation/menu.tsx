import Link from 'next/link'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'
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
                    <MenuLink>Ons Aanbod</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <MenuLink>Over Ons</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <MenuLink>Contact</MenuLink>
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
    flex-direction: column;
    flex: 1;

    ${()=>respond('m', `
        flex-direction: row;
        padding: 0 1.4rem;
    `)}
`
const MenuLink = styled.button<FlexibleComponentProps>`
    margin: ${p=>p.margin?p.margin: '1.4rem'};
    padding: .9rem 0;
    border: none;
    background-color: transparent;
    color: ${p=>p.theme.black};
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    letter-spacing: .15rem;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;

    ${p=>respond('m', `margin: ${p.margin?p.margin: '0 1.4rem'};`)}

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
            top: .6rem;
        }
    }

`
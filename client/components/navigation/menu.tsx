import Link from 'next/link'
import styled from 'styled-components'
import {fonts, respond} from '../../styles'
import { FlexibleComponentProps } from '../../types'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'

export default function MenuComponent() {
    return (
        <Menu>
            <li>
                <Link href='/menu'>
                    <MenuLink>Menukaart</MenuLink>
                </Link>
            </li>
            <li>
                <MenuNested>
                    <p>
                        Ons Aanbod
                        <FaChevronDown/>
                    </p>
                    <ul>
                        <Link href='/catering'>
                            <li>
                                <FaChevronRight/>
                                Catering
                            </li>
                        </Link>
                        <Link href='/distillery'>
                            <li>
                                <FaChevronRight/>
                                Distilleerderij
                            </li>
                        </Link>
                        <Link href='/meats'>
                            <li>
                                <FaChevronRight/>
                                Vleeswaren
                            </li>
                        </Link>
                    </ul>
                </MenuNested>
            </li>
            <li>
                <Link href='/about'>
                    <MenuLink>Over Ons</MenuLink>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
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
    background-color: ${p=>p.theme.white};
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

const MenuNested = styled.div<FlexibleComponentProps>`

    position: relative;
    background-color: ${p=>p.theme.white};
    margin: ${p=>p.margin?p.margin: '0 1.4rem'};
    padding: .9rem 0;
    ${p=>respond('m', `margin: ${p.margin?p.margin: '0 1.4rem'};`)}


    &:hover{

        ul{
            top: 100%;
        }
    }
    p{
        color: ${p=>p.theme.black};
        font-size: 1.9rem;
        font-family: ${fonts.heading};
        letter-spacing: .15rem;
        text-transform: uppercase;

        svg{
            margin-left: .9rem;
            color: ${p=>p.theme.primary};
        }
    }
    ul{

        position: static;
        top: -500%;
        left: -1.4rem;
        width: 150%;
        padding: 1.4rem 1.4rem 0 0;
        list-style: none;
        background-color: ${p=>p.theme.white};
        transition: top 0s;

        ${p=>respond('m', `position: absolute;padding: 1.4rem;`)}

        li{
            margin: 1.4rem 0;
            color: ${p=>p.theme.black};
            font-size: 1.9rem;
            font-family: ${fonts.heading};
            letter-spacing: .15rem;
            text-transform: uppercase;
            cursor: pointer;

            svg{
                margin-right: .9rem;
                color: ${p=>p.theme.primary};
                transition: all .3s;
            }

            &:hover{
                svg{
                    margin-left: .6rem;
                    margin-right: .3rem;
                }
            }
        }

    }
`
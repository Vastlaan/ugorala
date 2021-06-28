import styled from "styled-components"
import Link from 'next/link'
import { respond, SectionNarrow, ButtonFull } from "../../../styles"
import {FlexibleComponentProps} from '../../../types'

interface CategoryProps{
    label: string;
    btn: string;
    btnLink: string;
    area: string;
    imageUrl: string;
}

export default function CategoryComponent({label,btn,btnLink,area, imageUrl} : CategoryProps) {
    return (
        <Category url={imageUrl} area={area}>
            <Label>{label}</Label>
            <Link href={btnLink}>
                <Button>{btn}</Button>
            </Link>
        </Category>
    )
}


const Button = styled(ButtonFull)`
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all .6s;
`
const Label = styled.div`
    padding: .6rem .9rem;
    position: absolute;
    top: 2.7rem;
    left: 0;
    background-color: ${p=>p.theme.primary};
    font-size: 1.6rem;
    letter-spacing: .15rem;
    text-transform: uppercase;
    transition: all .3s;
    color: ${p=>p.theme.white};
`
const Category = styled.div<FlexibleComponentProps>`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid transparent;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    min-height: 35em;
    width: 100%;
    box-shadow: 0 0 1rem rgba(0,0,0,.3);
    grid-area: ${p=>p.area};
    background-image: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${(p)=>p.url});

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all .3s;
        border: 1rem solid transparent;
    }

    &:hover{
        border: 1px solid ${p=>p.theme.grey3};
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url(${(p)=>p.url});

        &::before{
            border: 1rem solid ${p=>p.theme.white};
            border-bottom: 6.7rem solid ${p=>p.theme.white};
        }

        ${Button}{
            bottom: .7rem;
        }
        ${Label}{
            left: -100%;
        }
    }
`
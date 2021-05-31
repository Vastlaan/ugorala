import styled from 'styled-components'
import {fonts} from './fonts'

export const ButtonPrimary = styled.button`
    padding: .9rem 1.4rem;
    background-color: transparent;
    border: 2px solid ${p=>p.theme.primary};
    color: ${p=>p.theme.primary};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 600;
    letter-spacing: .15rem;
    text-transform: uppercase;

    transition: all .3s;
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        height:100%;
        background-color: ${p=>p.theme.primary};
        transition: all .3s;
        z-index: -1;
    }

    &:hover{
        &::before{
            left: 0;
        }
        color: ${p=>p.theme.white};
    }
`
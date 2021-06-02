import styled from 'styled-components'
import {fonts} from './fonts'
import {FlexibleComponentProps} from '../types'

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

export const ButtonFull = styled.button<FlexibleComponentProps>`
    margin: ${p=>p.margin?p.margin:'0'};
    padding: .9rem 1.4rem;
    border: none;
    color: ${p=>p.theme.white};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 600;
    letter-spacing: .15rem;
    text-transform: uppercase;

    box-shadow: 0 .2rem .2rem .2rem rgba(0,0,0,.2);

    transition: all .3s;
    position: relative;
    overflow: hidden;

    background: linear-gradient(90deg,${p=>p.color?p.color:p.theme.primary} 40%,${p=>p.color?p.color:p.theme.primary} 60%,${p=>p.color?p.color:p.theme.primary} 70%) ${p=>p.color?p.color:p.theme.primary};

    &:hover{
        background: 
        linear-gradient(90deg,${p=>p.color?p.color:p.theme.primary} 40%,rgba(255,255,255,0.3) 60%,${p=>p.color?p.color:p.theme.primary} 70%) rgba(255,255,255,.3);
        background-size:300% 100%;
        animation: shine .9s ease-out;
    }

`

export const ButtonStrong = styled.p<FlexibleComponentProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'};
  transition: all .3s;

  &:hover{
      color: ${p=>p.theme.secondary};
  }
`
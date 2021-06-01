import styled from 'styled-components'
import {fonts} from './fonts'
import {ThemeProps, FlexibleComponentProps} from '../types'

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 6.7rem;
  font-weight: 500;
  letter-spacing: .2rem;
  line-height: 1.3;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.white};
  text-shadow: .2rem .3rem .4rem rgba(0,0,0,.3);
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    display: inline-block;
    margin-right: 1.4rem;
  }

`

export const Heading2 = styled.h2<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 4.7rem;
  font-weight: 500;
  letter-spacing: .2rem;
  line-height: 1.3;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.primary};
  text-shadow: .2rem .3rem .4rem rgba(0,0,0,.3);
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    display: inline-block;
    margin-right: 1.4rem;
  }
`

export const Text = styled.p<FlexibleComponentProps>`
  font-size: 1.9rem;
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`
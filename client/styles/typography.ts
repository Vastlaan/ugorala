import styled from 'styled-components'
import { fonts} from './fonts'
import respond from './respond'
import {FlexibleComponentProps} from '../types'

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 4.7rem;
  font-weight: 500;
  letter-spacing: .2rem;
  line-height: 1.3;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.white};
  text-shadow: .2rem .3rem .4rem rgba(0,0,0,.3);
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};

  ${()=>respond('s','font-size: 6.7rem;')}

  span{
    display: inline-block;
    margin-right: 1.4rem;
  }

`

export const Heading2 = styled.h2<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 3.4rem;
  font-weight: 400;
  letter-spacing: .2rem;
  line-height: 1.3;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.primary};
  text-shadow: .2rem .3rem .4rem rgba(0,0,0,.3);
  text-transform:uppercase;
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    display: inline-block;
    margin-right: 1.4rem;
  }
`
export const Heading3 = styled.h3<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  padding-left: 1.4rem;
  font-size: 2.7rem;
  font-weight: 400;
  letter-spacing: .2rem;
  line-height: 1.3;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.grey4};
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'left'};
  position: relative;

  &::before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: .4rem;
    height: 100%;
    background-color: ${p=>p.theme.primary};
  }
`

export const Heading4 = styled.h3<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: 1.3;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.grey4};
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};
  position: relative;
`

export const Heading6 = styled.h3<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  padding-left: 1.4rem;
  font-size: 1.9rem;
  font-weight: 400;
  letter-spacing: .2rem;
  line-height: 1.3;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  color: ${p=>p.color?p.color:p.theme.grey4};
  // text-shadow: .2rem .3rem .4rem rgba(0,0,0,.3);
  max-width: ${p=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};
  position: relative;

  &::before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: .4rem;
    height: 100%;
    background-color: ${p=>p.theme.primary};
  }
`

export const Text = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`

export const TextStrong = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`
export const TextBold= styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  font-weight:600;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .2rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`

export const TextSmall = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.6rem;
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`
export const TextMini = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.2rem;
  font-weight:300;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  letter-spacing: .15rem;
  max-width: ${(p)=>p.width?p.width:'65rem'};
  text-align: ${p=>p.align?p.align: 'center'}
`
import styled from 'styled-components'
import {fonts} from './fonts'
import {ThemeProps, FlexibleComponentProps} from '../types'

export const Heading1 = styled.h1<FlexibleComponentProps>`
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  color: ${(p:ThemeProps)=>p.color?p.color:p.theme.primary};
`

export const Text = styled.p<FlexibleComponentProps>`
  font-size: 1.9rem;
  color: ${(p:ThemeProps)=>p.color?p.color:p.theme.black};
  max-width: ${(p:FlexibleComponentProps)=>p.width?'65rem':'45rem'};
`
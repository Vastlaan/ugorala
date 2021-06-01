import styled from 'styled-components'
import {FlexibleComponentProps, ThemeProps} from '../types'

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: 1.4rem;
`
export const ConatinerNarrow = styled.div`
max-width: 960px;
margin: 0 auto;
`
export const Line = styled.div<FlexibleComponentProps>`
    width: ${p=>p.width?p.width:'45rem'};
    height: 2px;
    background-color: ${p=>p.color?p.color:p.theme.primary};
    margin: ${p=>p.margin?p.margin:'1.4rem auto'};
`

export const FlexCol = styled.div<FlexibleComponentProps>`
display: flex;
flex-direction: column;
align-items: ${(p) => (p.align ? p.align : "center")};
justify-content: ${(p) => (p.justify ? p.justify : "center")};
margin: ${(p) => (p.margin ? p.margin : "0")};
`;
export const FlexRow = styled.div<FlexibleComponentProps>`
display: flex;
align-items: ${(p) => (p.align ? p.align : "center")};
justify-content: ${(p) => (p.justify ? p.justify : "center")};
margin: ${(p) => (p.margin ? p.margin : "0")};
`;
import styled from 'styled-components'
import {FlexibleComponentProps, ThemeProps} from '../types'

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: 1.4rem;
`
export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: ${p=>p.padding?p.padding:'0'};
  max-width: 996px;
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
  width: ${p=>p.width?p.width:'auto'};
`;
export const FlexRow = styled.div<FlexibleComponentProps>`
  display: flex;
  align-items: ${(p) => (p.align ? p.align : "center")};
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
  margin: ${(p) => (p.margin ? p.margin : "0")};
  width: ${p=>p.width?p.width:'auto'};
`;

export const ContentContainer = styled.div<FlexibleComponentProps>`
  margin: ${(p) => (p.margin ? p.margin : "1.4rem 0")};
  padding: ${p=>p.padding?p.padding:'1.4rem'};
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.align ? p.align : "flex-start")};
  background-color: ${p=>p.color?p.color:p.theme.grey3};
`

export const Modal = styled.div`
background-color: rgba(0,0,0,.9);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left:0;
width: 100%;
height: 100%;
z-index: 99;
`
export const MessageBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 45rem;
background-color: ${p=>p.theme.white};
border: 5px solid ${p=>p.theme.primary};
padding: 2.7rem;
`
export const Close = styled.button`
position: absolute;
top: 2.7rem;
right: 2.7rem;
border: none;
background-color: transparent;
font-size: 2.7rem;
color: ${p=>p.theme.white};
`
import {  DefaultTheme } from 'styled-components'


export interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string;
    secondary?: string;
    tertiary?:string;
    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;
    black?: string;
    white?: string;
  }
  color?:string
}
export interface FlexibleComponentProps{
  padding?: string;
  margin?: string;
  color?:string;
  width?: string;
  align?: string;
  justify?: string;
  delay?: string;
  url?: string;
  area?: string;
}
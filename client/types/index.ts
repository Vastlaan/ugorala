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

export interface IOpeningHours{
  id?: string;
  day?: string;
  start?: string;
  end?: string;
  order?: number;
  createdAt?: string;
  published_at?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  
  opening_hours: IOpeningHours[] | undefined[];
  stories: any[],
  abouts: any[],
  menus: any[],
  galleries: any[]
}

export type IContext = { state: IState; dispatch?: React.Dispatch<IAction>; }
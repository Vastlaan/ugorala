import {createContext} from 'react'
import { IState, IAction, IContext} from '../types'

export const initialState : IState= {
    landing_page: {
        opening_hours: [],
        stories: [],
        abouts: []
    }
}

export const reducer = (state: IState, { type, payload }: IAction)  : IState =>{
    switch (type){
        case 'load_hours':
            return {...state, landing_page: {...state.landing_page, opening_hours: payload}} ;

        case 'load_stories':
            return {...state, landing_page: {...state.landing_page, stories: payload}} ;

        default:
            return state
    }
}

export const Context = createContext<IContext>({state: initialState})
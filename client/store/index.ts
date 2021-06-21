import {createContext} from 'react'
import { IState, IAction, IContext} from '../types'

export const initialState : IState= {

    opening_hours: [],
    stories: [],
    abouts: [],
    menus: []
}

export const reducer = (state: IState, { type, payload }: IAction)  : IState =>{
    switch (type){
        case 'load_hours':
            return {...state, opening_hours: payload} ;

        case 'load_stories':
            return {...state, stories: payload} ;

        default:
            return state
    }
}

export const Context = createContext<IContext>({state: initialState})
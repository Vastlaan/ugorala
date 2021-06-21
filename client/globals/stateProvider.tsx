import {useReducer} from 'react'
import {Context, reducer, initialState} from '../store'

export default function stateProvider({opening_hours, stories, abouts, menus, children}) {

        initialState.opening_hours = opening_hours
        initialState.stories = stories
        initialState.abouts = abouts
        initialState.menus = menus
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

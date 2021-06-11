import {useReducer} from 'react'
import {Context, reducer, initialState} from '../store'

export default function stateProvider({opening_hours, stories, abouts, children}) {

        initialState.landing_page.opening_hours = opening_hours
        initialState.landing_page.stories = stories
        initialState.landing_page.abouts = abouts
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

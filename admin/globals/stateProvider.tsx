import {useState, createContext} from 'react'

export const Context = createContext(null)

export default function stateProvider({children}) {

    const [user, setUser] = useState({})
    const [sectionToRender, setSectionToRender] = useState('stories')

    return (
        <Context.Provider value={{user, setUser, sectionToRender, setSectionToRender}}>
            {children}
        </Context.Provider>
    )
}

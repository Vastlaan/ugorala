import {useState, createContext} from 'react'

export const Context = createContext(null)

export default function stateProvider({children}) {

    const [user, setUser] = useState({})

    return (
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

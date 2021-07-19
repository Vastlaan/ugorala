import {useContext} from 'react'
import {Context} from '../globals/stateProvider'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Menu from '../components/menu'
import {respond} from '../styles'

export default function MainLayout({children}) {

    return (
        <>
            <Navigation />
            <Grid>
                <Menu />
                <Main>
                    {children}
                </Main>
            </Grid>
        </>
    )
}

const Grid = styled.div`

    display: flex;
    flex-direction: column-reverse;

    ${respond('m',`
        max-width: 1024px;
        height: calc(100vh - 4.7rem);
        margin: 4.7rem auto 0 auto;
        display: grid;
        grid-template-columns: 35rem 1fr;
        grid-gap: 2.7rem;
    `)}

`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-height:90vh;
    overflow-y: scroll;
    margin: 5vh auto;
    width: 100%;
    padding: 1.4rem;

    ${respond('m','max-height:95vh; margin: 0; width: auto;')}
`
import {useContext} from 'react'
import {Context} from '../globals/stateProvider'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import Menu from '../components/menu'

export default function MainLayout({children}) {

    const {setSectionToRender} = useContext(Context)

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
    max-width: 1024px;
    height: calc(100vh - 4.7rem);
    margin: 4.7rem auto 0 auto;
    display: grid;
    grid-template-columns: 35rem 1fr;
    grid-gap: 2.7rem;

`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-height:95vh;
    overflow-y: scroll;
`
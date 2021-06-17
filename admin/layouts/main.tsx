import {useContext} from 'react'
import {Context} from '../globals/stateProvider'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import {FlexCol, ButtonLink} from '../styles'

export default function MainLayout({children}) {

    const {setSectionToRender} = useContext(Context)

    return (
        <>
            <Navigation />
            <Grid>
                <Menu>
                    <ButtonLink onClick={()=>setSectionToRender('opening_hours')} color='snow'><li>Opening Hours</li></ButtonLink>
                    <ButtonLink onClick={()=>setSectionToRender('stories')} color='snow'><li>Stories</li></ButtonLink>
                </Menu>
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
    grid-template-columns: 20rem 1fr;
    grid-gap: 2.7rem;

`
const Menu = styled.ul`
    position: sticky;
    top: 0;
    padding: 2.7rem 0;
    background-color: ${p=>p.theme.black};
    display: flex;
    flex-direction: column;
    list-style: none;

    li{
        padding: 1.4rem;
        color: ${p=>p.theme.white};
        font-size: 1.9rem;
        border-bottom: 1px solid rgba(255,255,255,.3);
    }
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-height:95vh;
    overflow-y: scroll;
`
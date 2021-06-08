import styled from 'styled-components'
import Image from 'next/image'
import Contact from './contact'
import Copyrights from './copyrights'
import Services from './services'
import Hours from './hours'
import {ConatinerNarrow, respond, FlexRow} from '../../styles'

export default function FooterComponent() {
    return (
        <Footer>

            <ConatinerNarrow padding='4.7rem 1.4rem 1.4rem 1.4rem;'>
                <Grid>
                    <Contact />
                    <MenuContainer>
                        <Services />
                        <Hours/>
                    </MenuContainer>
                    
                </Grid>
            </ConatinerNarrow>

            <Copyrights/>

        </Footer>
    )
}

const Footer = styled.footer`
    background-color: ${p=>p.theme.black};
`
const Grid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${()=>respond('s', 'display: grid; grid-template-columns: 25rem 1fr; grid-gap: 2.7rem;')}
    ${()=>respond('m', 'display: grid; grid-template-columns: 35rem 1fr; grid-gap: 2.7rem;')}
    
`
const MenuContainer = styled.div`
    width: 100%;
    margin: 4.7rem 0 1.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ${()=>respond('s','justify-content: space-between; margin: 1.4rem 0;')}
    
`

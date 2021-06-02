import styled from 'styled-components'
import Image from 'next/image'
import Contact from './contact'
import Copyrights from './copyrights'
import Services from './services'
import Hours from './hours'
import {ConatinerNarrow, FlexCol, respond, TextStrong} from '../../styles'

export default function FooterComponent() {
    return (
        <Footer>

            <ConatinerNarrow padding='4.7rem 1.4rem 1.4rem 1.4rem;'>
                {/* <Logo>
                    <Image src='/img/logo-white.svg' alt='logo' layout='fill' />
                </Logo> */}
                <Grid>
                    <Contact />
                    <Services />
                    <Hours/>
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

    ${()=>respond('m', 'display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 2.7rem;')}
`

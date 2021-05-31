import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'
import Action from './action'
import {ConatinerNarrow} from '../../styles'


export default function NavigationComponent() {
    return (
        <Navigation>
          <ConatinerNarrow>
            <Content>

                <Logo/>
                <Menu />
                <Action />
                
            </Content>
          </ConatinerNarrow>   
        </Navigation>
    )
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${p=>p.theme.white};
    padding: 1.4rem 0;
    box-shadow: 0 .2rem .3rem rgba(0,0,0,.2);
    overflow: hidden;
    z-index: 99;

`

const Content = styled.div`
    display: flex;
    align-items: center;
    
`
import {useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import {useRouter} from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import {ButtonLink} from '../../styles'

export default function NavigationComponent() {

    const {user, setUser} = useContext(Context)
    const router = useRouter()

    console.log(user)

    function logout(){
        setUser({})
        router.push('/api/logout')
    }

    return (
        <Navigation>
            {
                user.isLogged ? <Menu>
                <Link href='/'>
                    <ButtonLink margin='0 1.4rem'>
                        Dashboard
                    </ButtonLink>
                </Link>
                <ButtonLink margin='0 1.4rem' onClick={logout}>
                    Logout
                </ButtonLink>
            </Menu> : <Menu>
                <Link href='/auth/login'>
                    <ButtonLink margin='0 1.4rem'>
                        Login
                    </ButtonLink>
                </Link>
            </Menu>
            }
            
        </Navigation>
    )
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: .3rem 1.4rem;
    background-color: ${p=>p.theme.grey1};
    border-bottom: 1px solid rgba(0,0,0,.3);
    z-index: 99;
`
const Menu = styled.div`
    width: fit-content;
    margin-left: auto;

`

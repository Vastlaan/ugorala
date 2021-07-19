import {useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import {ButtonLink} from '../../styles'
import {FiHelpCircle} from 'react-icons/fi'

export default function NavigationComponent() {

    const {user, setUser} = useContext(Context)
    const router = useRouter()

    function logout(){
        setUser({})
        router.push('/api/logout')
    }

    return (
        <Navigation>

            <Logo>
                <Image src='/img/itcontext-logo.svg' alt='logo itcontext' width='98' height='68' />
            </Logo>
            {
                user.isLogged ? <Menu>
                <a href='tel:0031682307051'>
                    <ButtonLink color='snow' margin='0 1.4rem'>
                        <FiHelpCircle/> 06 82 30 70 51
                    </ButtonLink>
                </a>
                <ButtonLink color='snow' margin='0 1.4rem' onClick={logout}>
                    Logout
                </ButtonLink>
            </Menu> : <Menu>
                <Link href='/auth/login'>
                    <ButtonLink color='snow' margin='0 1.4rem'>
                        Login
                    </ButtonLink>
                </Link>
            </Menu>
            }
            
        </Navigation>
    )
}

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: .9rem 1.4rem;
    background-color: ${p=>p.theme.black};
    border-bottom: 1px solid rgba(0,0,0,.3);
    z-index: 99;
`
const Menu = styled.div`
    width: fit-content;
    margin-left: auto;
    display: flex;

    button{
        display: flex;
        align-items: center;

        svg{
            margin-right: .9rem;
            color: ${p=>p.theme.secondary};
            font-size: 2.2rem;
        }
    }

`
const Logo = styled.div`
    display: flex;
    align-items: center;

`

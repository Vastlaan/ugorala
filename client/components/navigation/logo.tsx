import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function LogoComponent() {
    return (
        <Link href='/'>
            <Logo>
                <Image src='/logo.svg' alt='bedrijfs logo' layout='fill'/>
            </Logo>
        </Link>
    )
}
const Logo = styled.div`
    width: 13rem;
    height: 10rem;
    position: relative;
    cursor:pointer;
`
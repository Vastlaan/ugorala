import Image from 'next/image'
import styled from 'styled-components'

export default function LogoComponent() {
    return (
        <Logo>
            <Image src='/logo.svg' alt='bedrijfs logo' layout='fill'/>
        </Logo>
    )
}
const Logo = styled.div`
    width: 13rem;
    height: 10rem;
    position: relative;
`
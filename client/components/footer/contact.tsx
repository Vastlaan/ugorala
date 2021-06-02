import styled from 'styled-components'
import Image from 'next/image'
import {FlexCol, TextStrong} from '../../styles'

export default function ContactComponent() {
    return (
        <FlexCol align='flex-start'>
            <Logo>
                <Image src='/img/logo-white.svg' alt='logo' layout='fill' />
            </Logo>
            <TextStrong color='#fdf8ec'>{data.street}</TextStrong>
            <TextStrong color='#fdf8ec'>{data.city}</TextStrong>
            <br/>
            <TextStrong color='#fdf8ec'>{data.phone}</TextStrong>
            <TextStrong color='#fdf8ec'>{data.email}</TextStrong>
        </FlexCol>
    )
}

const Logo = styled.div`
    position: relative;
    width: 12rem;
    height: 10rem;
    margin-bottom: 2.7rem;
`

const data = {
    street: 'Leidsevaart 171',
    city: '2211 WE Noordwijkerhout',
    phone: '(+31) (0) 611 33 08 14',
    email: 'info@ugorala.nl'
}
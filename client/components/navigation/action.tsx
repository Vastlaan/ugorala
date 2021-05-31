import Link from 'next/link'
import styled from 'styled-components'
import {ButtonPrimary} from '../../styles'

export default function ActionComponent() {
    return (
        <Action>
            <Link href='/'>
                <ButtonPrimary>
                    Reserveren
                </ButtonPrimary>
            </Link>
        </Action>
    )
}



const Action = styled.div`
    display: flex;
    align-items: center;
`
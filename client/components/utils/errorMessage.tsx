import styled from 'styled-components'
import {TextStrong} from '../../styles'
import {MdErrorOutline} from 'react-icons/md'

export default function ErrorMessageComponent({message}:{message: string}) {
    return (
        <Error>
            <MdErrorOutline/>
            <p>{message}</p>
        </Error>
    )
}

const Error = styled.div`
    margin: .6rem 0;
    padding: .3rem 1.4rem;
    display: grid;
    grid-template-columns: 1.9rem 1fr;
    grid-gap: 1.4rem;
    align-items: center;
    background-color: ${p=>p.theme.primary};
    color: ${p=>p.theme.white};
    
    svg{
        font-size: 1.9rem;
    }
    p{
        font-size: 1.4rem;
    }

`

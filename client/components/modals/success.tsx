import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { TextStrong, ButtonFull } from '../../styles'
import {MdClose} from 'react-icons/md'

interface ModalProps{
    message: string;
    close: Dispatch<any>
}

export default function SuccessModal({message, close}) {
    return (
        <ModalWindow>
            <Icon onClick={()=>close(false)}><MdClose /></Icon>
            <MessageBox>
                <TextStrong>{message}</TextStrong>
                <ButtonFull margin='1.4rem 0' onClick={()=>close(false)}>Prima!</ButtonFull>
            </MessageBox>
        </ModalWindow>
    )
}

const ModalWindow = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:100;
`
const Icon = styled.button`
    position: absolute;
    top: 2.7rem;
    right: 2.7rem;
    border: none;
    background-color: transparent;

    svg{
        font-size: 4.7rem;
        color: ${p=>p.theme.white};
    }
`
const MessageBox = styled.div`
    padding: 2.7rem;
    margin: 1.4rem;
    background-color: ${p=>p.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid ${p=>p.theme.primary}

`

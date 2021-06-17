import styled from 'styled-components'
import {Heading6, TextStrong, ButtonFull} from '../../styles'
import {MdClose} from 'react-icons/md'

export default function ConfirmationModal({setDisplayModal, message}) {
    return (
        <Modal>
            <Close onClick={()=>setDisplayModal(false)}>
                <MdClose/>
            </Close>
            <MessageBox>
                <Heading6>Confirmation</Heading6>
                <TextStrong margin='2.7rem 0'>{message}</TextStrong>
                <ButtonFull onClick={()=>setDisplayModal(false)}> <span>Close</span></ButtonFull>
            </MessageBox>
        </Modal>
    )
}

const Modal = styled.div`
    background-color: rgba(0,0,0,.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 99;
`
const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 45rem;
    background-color: ${p=>p.theme.white};
    border: 5px solid ${p=>p.theme.primary};
    padding: 2.7rem;
`
const Close = styled.button`
    position: absolute;
    top: 2.7rem;
    right: 2.7rem;
    border: none;
    background-color: transparent;
    font-size: 2.7rem;
    color: ${p=>p.theme.white};
`
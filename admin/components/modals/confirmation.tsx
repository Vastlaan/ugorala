import styled from 'styled-components'
import {Modal, MessageBox, Close, Heading6, TextStrong, ButtonFull} from '../../styles'
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

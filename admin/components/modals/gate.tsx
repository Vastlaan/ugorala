import styled from 'styled-components'
import {Modal, MessageBox, Close, Heading6, TextStrong, ButtonFull, FlexRow} from '../../styles'
import {MdClose} from 'react-icons/md'

export default function GateModal({setDisplayGate, message, cb}) {
    return (
        <Modal>
            <Close onClick={()=>setDisplayGate(false)}>
                <MdClose/>
            </Close>
            <MessageBox>
                <Heading6>Confirmation</Heading6>
                <TextStrong margin='2.7rem 0'>{message}</TextStrong>
                <FlexRow>
                    <ButtonFull color='#00b140' margin='0 1.4rem 0 0' onClick={()=>{
                        setDisplayGate(false)
                        cb()
                    }}> <span>Yes</span></ButtonFull>
                    <ButtonFull onClick={()=>setDisplayGate(false)}> <span>No</span></ButtonFull>
                </FlexRow>
            </MessageBox>
        </Modal>
    )
}

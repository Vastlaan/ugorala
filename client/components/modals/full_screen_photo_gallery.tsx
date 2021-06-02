import {Dispatch, SetStateAction} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {fonts} from '../../styles'
import {MdClose} from 'react-icons/md'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'

interface ModalProps{
    imagesUrls: string[];
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    close: ()=>void;
}

export default function FullScreenPhotoGalleryModal({imagesUrls, currentIndex, setCurrentIndex, close}:ModalProps) {

    const count = `${currentIndex+1}/${imagesUrls.length}`

    function switchPhotoIndex(direction: string) : void {
        if(direction === 'up'){
            currentIndex===imagesUrls.length -1 ? setCurrentIndex(0) : setCurrentIndex(prevState=>prevState + 1)
        }else{
            currentIndex===0 ? setCurrentIndex(imagesUrls.length -1) : setCurrentIndex(prevState=>prevState -1 )
        }
    }

    return (
        <Container >
            <CloseArea  onClick={close}/>
            <Count>{count}</Count>
            <Close onClick={close}>
                <MdClose />
            </Close>
            <ImageContainer>
                <Image src={imagesUrls[currentIndex]} alt='dish' layout='fill' objectFit='cover' />
            </ImageContainer>
            <Buttons>
                <ButtonIcon onClick={()=>switchPhotoIndex('down')}><IoChevronBackOutline/></ButtonIcon>
                <ButtonIcon onClick={()=>switchPhotoIndex('up')}><IoChevronForwardOutline/></ButtonIcon>
            </Buttons>
        </Container>
    )
}
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.7rem 2.7rem;
`
const CloseArea = styled.div`
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.7);
    z-index: -1;
`
const Close = styled.div`
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
    color: ${p=>p.theme.black};
    font-size: 2.7rem;
    cursor: pointer;

`
const ImageContainer = styled.div`
    position: relative;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`
const Count = styled.div`
    position: absolute;
    top: 1.4rem;
    left: 1.4rem;
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.grey4};
`
const Buttons = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin:1.4rem auto;
`
const ButtonIcon = styled.button`
    border: none;
    background-color: transparent;
    margin-right: 1.4rem;
    font-size: 4.7rem;
    color: ${p=>p.theme.grey4};
    line-height:1;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: ${p=>p.theme.black};
    }
`
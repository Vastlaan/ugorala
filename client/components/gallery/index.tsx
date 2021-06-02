import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import FullScreenGallery from '../modals/full_screen_photo_gallery'
import {SectionNarrow} from '../../styles'

interface GalleryProps{
    imagesUrls: string[];
}

export default function GalleryComponent({imagesUrls}: GalleryProps) {


    const [isFullOn, setIsFullOn] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    function displayFullScreen(i: number){
        setCurrentIndex(i)
        setIsFullOn(true)
    }

    return (
        <SectionNarrow margin='0 auto 6.7rem auto'>
            <Grid>
                {imagesUrls.map((url, i)=>{
                    return(
                        <ImageContainer key={`gallery-${i}`} onClick={()=>displayFullScreen(i)}>
                            <Image src={url} alt="dish" layout='fill' objectFit='cover' />
                        </ImageContainer>
                    )
                })}
            </Grid>
            {isFullOn && <FullScreenGallery imagesUrls={imagesUrls} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} close={()=>setIsFullOn(false)} />}
        </SectionNarrow>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 24rem);
    grid-gap: .6rem;
    justify-content: center;
`
const ImageContainer = styled.div`
    position: relative;
    width: 24rem;
    height: 16rem;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0);
        transition: all .3s;
        z-index:10;
        cursor: pointer;
    }
    
    &:hover{
        &::before{
            background-color: rgba(255,255,255,.3);
        }
    }

`

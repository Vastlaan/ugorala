import Image from 'next/image'
import styled from 'styled-components'
import {SectionNarrow, Heading3, Text} from '../../../styles'

interface StoryProps{
    heading: string;
    imgUrl: string;
    paragraphs: string[];
}

export default function StoryComponent({heading, imgUrl, paragraphs }:StoryProps) {
    return (
        <SectionNarrow margin='4.7rem auto'>
         
            <Grid>
                
                <TextContainer>
                    <Heading>
                        <Heading3 margin='0 0 2.7rem 0'>{heading}</Heading3>        
                    </Heading>
                    {paragraphs.map((para, i)=>{
                        return(
                            <Text align='left' margin='1.4rem 0' key={`para-${i}`}>{para}</Text>
                        )
                    })}
                </TextContainer>
                <ImageContainer>
                    <Image src={imgUrl} alt={heading} layout='fill' objectFit='cover'/>
                </ImageContainer>
            </Grid>
        </SectionNarrow>
    )
}

const Heading = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2.7rem;

`
const ImageContainer = styled.div`
    margin-left: auto;
    width: 45rem;
    height: 45rem;
    position: relative;
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
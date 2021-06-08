
import Link from 'next/link'
import styled from 'styled-components'
import {Heading1, Text, Line, ButtonFull, respond} from '../../../styles'

interface VideoBackgroundProps{
  heading: string;
  para: string;
  videoUrl: string
  btnLink?: string;
  btnName?: string;
}

export default function VideoBackground({heading, para, videoUrl, btnLink, btnName}: VideoBackgroundProps) {
  return (
    <Container>
      <video autoPlay muted loop id="myVideo">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <Heading1 color='snow'>{heading}</Heading1>
      <Line margin='1.4rem auto 2.7rem auto' width='15rem'/>
      <Text align='center' color='snow'>{para}</Text>
      {btnLink && <Link href={btnLink}>
          <ButtonFull margin='2.7rem 0'>{btnName}</ButtonFull>
          </Link>}
    </Container>
  )
}


const Container = styled.div`
  margin: 4.7rem 0;
  width: 100%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.3) 20%, rgba(0,0,0,.5) 50%);
    z-index: -1;
}

  video{
    position: absolute;
    bottom: 0;
    left:0;
    min-width: 100%;
    height:100%;
    z-index: -2;

    ${()=>respond('669px','width:100%; height: auto;')}
  }
`
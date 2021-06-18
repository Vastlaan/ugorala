import styled from 'styled-components'
import Navigation from './navigation'
import { Heading1, TextStrong} from '../../styles'
import {FlexibleComponentProps} from '../../types'

interface HeaderProps{
  title: string;
  body: string;
  image?: string;
}

export default function HeaderComponent({title, body, image}:HeaderProps) {


  return (
    <Header url={image}>

      <Navigation/>

      <Heading1>{title}</Heading1>

      <TextStrong color="white">
        {body.split(' ').map((word, i)=> i===4?<span key={i}>{word} </span>:`${word} `)}
      </TextStrong>
    </Header>
  )
}

const Header = styled.header<FlexibleComponentProps>`
  padding: 1.4rem;
  padding-top: 8.7rem;
  position: relative;
  width: 100vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${p=>p.url?p.url:'/img/header-1.jpg'});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
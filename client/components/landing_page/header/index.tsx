import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { respond, ButtonFull, Heading1} from '../../../styles'
import gsap from 'gsap'

interface HeaderProps{
    headings: string[];
}

export default function HeaderComponent({headings}) {

    const [headingIndex, setHeadingIndex] = useState(0) // 0 or 1
    const target = useRef(new Array())

    useEffect(()=>{

        const tl = gsap.timeline({repeat: -1, repeatDelay: 5})

        tl.to(target.current, {y: "-100%", autoAlpha: 0, delay: 4, duration: 1, stagger: .1})
        .set(target.current, { autoAlpha: 0, y: "100%" })
        .call(() => {
            setHeadingIndex(prevState => {
                if(prevState === (headings.length - 1) ){
                    return 0
                }
                return prevState + 1
            })
        })
        .to(target.current, {
            autoAlpha: 1,
            y: "0",
            duration: 1,
            stagger: 0.1,
        });

        return ()=> {tl.kill()}
    },[])


    return (
        <Header>
            <Content>
                <Heading1>{headings[headingIndex].split(' ').map((word, i) => <span  key={i} ref={(el=>target.current.push(el))}>{word} </span>)}</Heading1>
                <ButtonsConatiner>
                    <ButtonFull margin='1.4rem'>Menukaart</ButtonFull>
                    <ButtonFull margin='1.4rem' color='#222'>Tafel reserveren</ButtonFull>
                </ButtonsConatiner>
            </Content>
        </Header>
    )
}

const Header = styled.header`
    padding: 0;
    padding-top: 13rem;
    width: 100%;
    min-height: 60vh;
    position: relative;
    background-image: url('/img/header-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    ${()=>respond('s','min-height: 45vh;')}
    ${()=>respond('m','min-height: 60vh;padding: 2.7rem; padding-top: 13rem;')}
    
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.7rem 0 4.7rem 0;
`
const ButtonsConatiner = styled.div`
    margin: 0rem;
    display: flex;
    justify-content: center;
    ${()=>respond('m','margin: 2.7rem;')}
`
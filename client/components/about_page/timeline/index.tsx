import styled from 'styled-components'
import { respond,fonts, SectionNarrow} from '../../../styles'

export default function TimelineComponent() {
    return (
        <SectionNarrow margin='0 auto 6.7rem auto'>
            <Timeline>
                <Event>
                    <h3>2014</h3>
                    <LineSpecial />
                    <p>We openden het eerste Poolse restaurant in de omgeving - U Górala.</p>
                </Event>
                <Event>
                    <h3>2017</h3>
                    <LineSpecial />
                    <p>We begonnen met het verkopen van huisgerookte worsten en vleeswaren.</p>
                </Event>
                <Event>
                    <h3>2020</h3>
                    <LineSpecial />
                    <p>We zijn overgestapt naar onze nieuwe locatie, gelegen aan de Leidsevaart 171 in Noordwijkerhout</p>
                </Event>
                <Event color='#8c271e'>
                    <h3>2021</h3>
                    <Line />
                    <p>We bedienen meer dan 500 klanten per week</p>
                </Event>
            </Timeline>
        </SectionNarrow>
    )
}

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: snow;
    padding: 2.7rem 1.4rem;
    //box-shadow: 0 0 1rem rgba(0,0,0,.1);
    border-radius: 5px;

    ${()=>respond('m', `
        display: grid;
        grid-template-columns: repeat(4, 22rem);
        grid-gap: 1.4rem;
        align-items: start;
        
    `)}
`

const Event = styled.article`
    display: grid;
    grid-template-columns: 10rem 5rem 20rem;
    align-items: center;
    margin: 2.7rem;

    ${()=>respond('m',`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 1.4rem;
    `)}

    h3{
        font-size: 2.7rem;
        color: ${p=> p.color?p.color:p.theme.grey4};
        font-family: ${fonts.para};
        text-align: center;
    }
    p{
        font-size: 1.4rem;
        font-weight: 400;
        color: ${p=>p.theme.grey4};
        font-family: ${fonts.para};
        text-align: center;
    }
    
`
const LineSpecial = styled.div`

    width: 2rem;
    height: 1.3rem;
    border-radius: 25% 75% 75% 25% / 50% 50% 50% 50%;
    margin: 1.4rem 0;
    background-color: ${p=>p.theme.grey4};
    position: relative;
    //box-shadow: -.2rem .2rem .2rem rgba(0,0,0,.3);

    &::after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 4.2rem) rotate(90deg);
        height: 1px;
        width: 6.7rem;
        background-image: linear-gradient(to right, ${p=>p.theme.tertiary}, ${p=>p.theme.tertiary});
        ${()=>respond('m',`
            left: 100%;
            top: 50%;
            transform: translate(.9rem, -50%);
            height: 2px;
            width: 18.6rem;
        `)}
    }

`
const Line = styled.div`
    width: 2rem;
    height: 1.3rem;
    border-radius: 25% 75% 75% 25% / 50% 50% 50% 50%;
    margin: 1.4rem 0;
    background-color: ${p=>p.theme.black};
    //box-shadow: -.2rem .2rem .2rem rgba(0,0,0,.3);
`



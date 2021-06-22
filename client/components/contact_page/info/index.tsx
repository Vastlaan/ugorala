import styled from 'styled-components'
import { respond, SectionNarrow, TextStrong, TextBold} from '../../../styles'
import {FaMapMarked, FaEnvelope, FaPhoneAlt}  from 'react-icons/fa'

export default function InfoComponent() {
    return (
        <SectionNarrow>
                <DetailsContainer>
                    <Detail>
                        <Icon>
                            <FaPhoneAlt/>
                        </Icon>
                        <TextStrong>Bel Ons:</TextStrong>
                        <TextBold><a href="tel:0031611330814">(+31) (0) 611 33 08 14</a></TextBold>
                    </Detail>
                    <Detail>
                        <Icon>
                            <FaEnvelope/>
                        </Icon>
                        <TextStrong>Mail Ons:</TextStrong>
                        <TextBold><a href="mailto:info@ugorala.nl">info@ugorala.nl</a></TextBold>
                    </Detail>
                    <Detail>
                        <Icon>
                            <FaMapMarked/>
                        </Icon>
                        <TextStrong>Leidsevaart 171</TextStrong>
                        <TextStrong>2211 WE Noordwijkerhout</TextStrong>
                    </Detail>
                </DetailsContainer>
        </SectionNarrow>
    )
}

const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 3.3rem;
    color: ${p=>p.theme.primary};
    margin-bottom: 1.4rem;
    
`
const DetailsContainer = styled.div`
    margin-bottom: 4.7rem;
    display: flex;
    flex-direction: column;

    ${()=>respond('m', 'flex-direction: row; justify-content: center;')}

`
const Detail = styled.div`
    min-width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.7rem;
    margin: 1.4rem;
    background-color: ${p=>p.theme.grey2};
    box-shadow: 0 .6rem 1rem rgba(0,0,0,.3);
`
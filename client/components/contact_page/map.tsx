import styled from 'styled-components'
import { respond, SectionNarrow } from '../../styles'

export default function MapComponent() {
    return (
        <SectionNarrow margin='0 auto 4.7rem auto'>
            <Map>
                <iframe
                    title="route-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.919100524916!2d4.493256915945525!3d52.24485306433569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c1bb3971956b%3A0x96410033b738eccd!2sLeidsevaart%20171%2C%202211%20WE%20Noordwijkerhout!5e0!3m2!1spl!2snl!4v1578565029417!5m2!1spl!2snl"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </Map>
        </SectionNarrow>
    )
}
const Map = styled.div`

    margin: 2.7rem 0 0 0;
    display: flex;
    justify-content: center;

    iframe {
        width: 280px;
        height: 250px;
        ${() =>
            respond(
                "s",
                `width: 500px;
                height: 350px;`
            )}
        ${() =>
            respond(
                "xl",
                `width: 650px;
                height: 400px;`
            )}
    }
`;
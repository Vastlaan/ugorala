import styled from 'styled-components'
import {} from '../../../styles'

export default function HeaderComponent() {
    return (
        <Header>
            <BackgrounVideo>
                <video preload='auto' autoPlay loop muted>
                    <source src='https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/headerCompressed.mp4' type='video/mp4' />
                    <p>This browser doesn't support video</p>
                </video>
            </BackgrounVideo>
        </Header>
    )
}

const Header = styled.header`
    padding: 2.7rem;
    padding-top: 13rem;
    width: 100%;
    min-height: 80vh;
    position: relative;
`
const BackgrounVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index:-1;

    video{
        width: 100%;

    }
`
import styled from 'styled-components'
import {fonts} from '../../styles'

export default function CopyrightComponent() {
  return (
    <Copyright>
      <p>
        &copy; {new Date().getFullYear()} Copyright{" "}
        u Gorala. Alle rechten voorbehouden.
        Designed by <a href="https://michalantczak.com">Michal Antczak</a>
      </p>
    </Copyright>
  )
}
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:.9rem;
    border-top: 1px solid rgba(255,255,255,.3);
    p {
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        font-family: ${fonts.heading};
        color: ${(p) => p.theme.white};
        text-align: center;
        a {
            margin: .9rem 0 0 0;
            padding: .6rem .9rem;
            background-color: ${p=>p.theme.primary};
            color: ${p=>p.theme.white};
            display: inline-block;
            transition: all .3s;
            box-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
            &:hover{
                transform: rotate(4deg) scale(1.05);
            }
        }
    }
`;
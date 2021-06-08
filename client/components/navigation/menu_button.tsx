import React, {Dispatch, SetStateAction} from 'react'
import styled from "styled-components";
import {respond} from '../../styles'

interface ButtonMenuProps{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
interface ButtonProps{
  isOpen: boolean;
}

export default function ButtonMenu({isOpen, setIsOpen}:ButtonMenuProps) {
    //this button takes its state as a props, uncomment code below if it does't
    //const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Button
            isOpen={isOpen}
            onClick={() => setIsOpen(prevState=>!prevState)}
        >
            <div></div>
        </Button>
    );
}

const Button = styled.button<ButtonProps>`
    width: 5rem;
    height: 5rem;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: ${p=>p.isOpen?'fixed':'fixed'};
    top:1.4rem;
    right: ${p=>p.isOpen?'1.4rem':'1.4rem'};
    z-index: 99;
    // below media query is optional
    ${(p)=>respond('xl',`right: ${p.isOpen?'1rem':'calc(((100vw - 1366px) / 2) + 1rem)'};`)}
    ${(p)=>respond('tv',`right: ${p.isOpen?'1rem':'calc(((100vw - 2561px) / 2) + 1rem)'};`)}
    
    &:active,
    :focus {
        outline: none;
    }
    div {
        
        width: 3rem;
        height: 2px;
        position: relative;
        background-color: ${p=>p.theme.primary};
        transition: all 0.3s;
        transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "")};
        pointer-events: none;

        &:after {
            width: 3rem;
            height: 2px;
            content: "";
            display: block;
            position: absolute;
            background-color: ${p=>p.theme.primary};
            top: -1rem;
            left: 0;
            transition: all 0.3s;
            transform: ${(props) =>
                props.isOpen ? "translate(0%,1rem) rotate(90deg)" : ""};
        }
        &:before {
            width: 3rem;
            height: 2px;
            content: "";
            display: ${(props) => (props.isOpen ? "none" : "block")};
            position: absolute;
            background-color: ${p=>p.theme.primary};
            top: 1rem;
            left: 0;
        }
    }
`
import React from "react";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import { respond, fonts } from "../styles";

export default function GlobalStyles() {
    return <StylesConatiner />;
}

interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string,
    secondary?: string,
    greyLight?: string,
    greyDark?: string,
    black?: string,
    white?: string
  }
}
const StylesConatiner = createGlobalStyle`


  @keyframes shine{
    0% {
      background-position: right;    
    }
    100%{
      background-position: left;
    }
  }

  *,
  *::after,
  *::before{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      line-height: inherit;
      font-family: inherit;
      
      
  }
  html{
      font-size: 50%;
      box-sizing: border-box;
      font-family: ${fonts.para};
      line-height: 1.3;
      ${() => respond("xs", `font-size:30%;`)}
      ${() => respond("l", `font-size:55%;`)}     
      ${() => respond("xxl", `font-size:62.5%;`)}
      ${() => respond("tv", `font-size:100%;`)}
      
      ${() => respond("m", "line-height: 1.6;")};
  }
  
  body{
      overflow-x: hidden;
      background-color: ${(p : ThemeProps) => p.theme.white};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${fonts.heading};
  }
  a{
      text-decoration: none;
      color:inherit;
  }
  button{
      cursor: pointer;
      &:active,:focus{
          outline: none;
      }
  }
  button, input, textarea{
      border: none;
  }
  input, textarea{
    margin: 1.4rem 0;
    padding: .9rem 1.4rem;
    align-self: stretch;

      &:active, :focus{
        outline: 1px solid rgba(0,0,0,.3);
      }
      color: ${(p : ThemeProps) => p.theme.greyDark}
  }
  input, textarea{
    
}
`;
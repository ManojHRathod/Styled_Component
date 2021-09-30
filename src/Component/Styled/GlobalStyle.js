import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,100;1,200&display=swap');

*{
  
    box-sizing:border-box;
}

body{
    background: ${({ theme }) => theme.colors.body};
    color:hsl(192,100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size:1.15em;
    margin:0;
}

p{
    color:black;
    opacity:0.6;
    line-height:1.5;
    font-weight:1000;

}

img{
    max-width:100%
}

`;

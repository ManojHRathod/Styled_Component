import styled, { ThemeConsumer } from "styled-components";

export const Button = styled.button`
    border-radius:50px;
    border:none;
    box-shadow: 0 0 10px rgba(20,60,10, 0.15);
    cursor:pointer;
    font-size:16px;
    font-weight:700;
    padding: 15px 60px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};

    &:hover{
        opacity: 0.9;
        transform: scaleY(0.98);
    }

    @media (max-width :768px){
        margin-top:20px;
    }
    
`

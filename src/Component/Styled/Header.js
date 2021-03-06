import styled from "styled-components";

export const HeaderStyle = styled.header`


  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px 0;

  h1 {
    font-weight:1000;
    margin-left: 10px;
    font-size: 1.5em;
  }
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({theme})=> theme.mobile}){
    flex-direction:column;
  }
`

export const Theme = styled.i`
width:20px;
height:30px;
`


export const Logo = styled.img`
@media(max-width: ${({theme}) =>theme.mobile}){
 margin-left:100px;
 margin-top: 20px;
}`


export const Image = styled.img`
width:375px;
margin-left:40px;
`   

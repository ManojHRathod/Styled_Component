import React from "react";
import { Container } from "./Component/Styled/Container";
import Header from "./Component/Header";
import { ThemeProvider } from "styled-components";
import {theme} from './Component/Styled/Theme';
import { GlobalStyle } from "./Component/Styled/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme= {theme}>
      <>
      <GlobalStyle/>
        <Header />
        <Container>
          <h1></h1>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;

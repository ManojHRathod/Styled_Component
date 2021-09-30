import React from "react";
import { HeaderStyle, Nav, Logo, Image } from "./Styled/Header";
import { Container } from "./Styled/Container";
import { Button } from "./Styled/Button.style";
import { Flex } from "./Styled/Flex.Style";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Container>
          <Nav>
            <Logo src="./images/jamsfy-logo.svg" alt="logo"></Logo>
            <Button>Try it Free</Button>
          </Nav>
          <Flex>
            <div>
              <h1> We love Jamsfy And We Are Jamsian's </h1>
              <p>
                We are Jamstack experts and with Jamsfy you enjoy the assurance
                of quality and efficiency. Our market-leading services and
                products. fueled by our work ethics and values provides a
                culmination of benefits that drive your ideas to fruition.
              </p>
              <Button bg="#ff0099" color="#fff">
                Get Started For Free
              </Button>
            </div>

            <Image src="./images/paper-airplanes.svg" alt="image"></Image>
          </Flex>
        </Container>
      </HeaderStyle>
    </>
  );
};

export default Header;

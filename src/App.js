import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.js";
import Fonts from "./utils/fonts.js";
import Hello from "./pages/hello.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Resume from "./pages/resume.jsx";
import Github from "./pages/github.jsx";
import Contact from "./pages/contact.jsx";
import styled from "styled-components";
import { Colors } from "./utils/colors.js";
import { fontSizes } from "./utils/fontsizes.js";
import Header from "./components/Header.jsx";

const AppContainer = styled.div`
  background-color: ${Colors.body.bg};
  color: ${Colors.p.color};
  font-size: ${fontSizes.body};
  font-family: monospace;
  min-height: 100vh;
  width:100%;
overflow:hidden;

`;

const Components = styled.div`
  padding-top:3.75rem;
`;

const CustomContainer = styled.div`
width:80%;
margin:0 auto;
`;

function App() {
   return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <AppContainer>
          <CustomContainer>
        {/* <Container> */}
       <Header/>
          <Components>
            <Hello />
            <Resume />
            <Github />
            <Portfolio />
            <Contact />
          </Components>
          </CustomContainer>
        {/* </Container> */}
        </AppContainer>
      </ChakraProvider>
    </>
  );
}

export default App;

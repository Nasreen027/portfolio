import React, { useEffect } from "react";
import styled from "styled-components";
import { fontSizes } from "../utils/fontsizes";
import { Colors } from "../utils/colors";
import { Flex } from "@chakra-ui/react";

const Ul = styled.ul`
  list-style-type: none;
  font-size: ${fontSizes.h5};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
//   width:${(props)=>props.width}
`;

const ListItem = styled.li`
  margin: 1.25rem;
  font-weight: bold;
`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: ${Colors.p.color};
  }
`;
function Navlist(props) {
  const { isToggled, setIsToggled } = props;
  console.log(isToggled, "isToggled");

  const scrollToSection = (sectionId) => {
    // console.log(sectionId,'sectionId');
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(section, "section");
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(()=>{
  const handleCLickOutside = (event) => {
    event.preventDefault();
    setIsToggled(false);
  }
  document.addEventListener("mousedown", handleCLickOutside);
  return () => {
    document.removeEventListener("mousedown", handleCLickOutside);
  };
  },[setIsToggled])
  return (
    <>
      <Flex>
        <Ul direction={isToggled ? "column" : "row"}>
          <ListItem>
            <StyledLink
              href="#hello"
              color="#ffffff"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hello");
              }}
            >
              Hello
            </StyledLink>
          </ListItem>
          <ListItem>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("resume");
              }}
            >
              Resume
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#github"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("github");
              }}
            >
              Github
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
            >
              Portfolio
            </a>
          </ListItem>
          <ListItem>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </ListItem>
        </Ul>
      </Flex>
    </>
  );
}

export default Navlist;

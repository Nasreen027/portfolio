import React, { useState } from "react";
import styled from "styled-components";
import { Flex, IconButton, Show } from "@chakra-ui/react";
import { CustomIcons } from "../utils/icons";
import Navlist from "./Navlist";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  // width: 80%;
  background-color: black;
  z-index: 1000;
  padding: 0.625rem;
  text-align: center;
`;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const ToggleNavHandler = () => {
    setIsToggled(!isToggled);
    // console.log(isToggled,'isToggled');
  };
  
  return (
    <>
      <Navbar width="35.813rem">
        <Flex p={2} gap={15} justifyContent="space-between" alignItems="center">
            <Show above="md">
              <Navlist />
            </Show>
            {isToggled ? (
              <Navlist isToggled={isToggled} />
            ):(
            <Show below="md">
              <IconButton
                onClick={ToggleNavHandler}
                color={"white"}
                background={"transparent"}
                fontSize={100}
                as={CustomIcons.ThreeBars}
              />
            </Show>
            )}
        </Flex>
      </Navbar>
    </>
  );
}

export default Header;

import { Box, Flex, Heading, Spacer, Stack, Image } from "@chakra-ui/react";
import ProfilePicture from "../images/myProfile.jpeg";
import styled from "styled-components";
import { fontSizes } from "../utils/fontsizes";

const DataList = styled.dl`
  font-size: ${fontSizes.title};
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 0.625rem;
  column-gap: 0.625rem;
  dt {
    font-weight: bold;
    color: #fefefe;
  }
  dd {
    margin: 0;
  }
`;

const Hello = () => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md:"row" }}
        pt="100px"
        id="hello"
        w="100%"
        p="4.325rem"
      >
        <Box
        //  h="12.5rem"
          w="24.25rem"
          // w={"100%"}
          pb="4.375rem"
           >
          <Stack spacing={6}>
            <Heading
              color={"#0df655"}
              fontFamily="monospace"
              as="h1"
              size="4xl"
              noOfLines={1}
            >
              Nasreen
            </Heading>
            <Heading fontFamily="monospace" as="h5" size="lg">
              I am a frontend developer creating user-friendly web interfaces.
            </Heading>
            <DataList>
              <dt>Age:</dt>
              <dd>21</dd>
              <dt>Phone:</dt>
              <dd>0341-8085619</dd>
              <dt>Email:</dt>
              <dd>nasreenmalik429@gmail.com</dd>
              <dt>Address:</dt>
              <dd>Karachi, Pakistan</dd>
            </DataList>
          </Stack>
        </Box>
        <Box
          //   bg="#6d3607"
          // bg="linear-gradient(to right, #6d3607, #4d2605)"
          // h="700px"
          borderRadius="212.5rem"
          width={{base:'20.125', md:'18.125rem'}}
          // w=""
          // w={"100%"}
          // fontSize="300px"
          // pos="relative"
          // left="20rem"
        >
          <Image
            boxSize="auto"
            borderBottomLeftRadius="2.5rem"
            // pos="relative"
            // left="245px"
            bottom="13.75rem"
            src={ProfilePicture}
            alt="Nasreen"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Hello;

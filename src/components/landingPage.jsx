import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SocialIcons from "./socialIcons";
import Jay from "../assets/jay.svg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Box minH="80vh" padding={{ base: "6rem", md: "3rem" }}>
        <Box display="flex" justifyContent="space-between">
          <Box marginTop="2rem" display={{ base: "none", md: "flex" }}>
            <SocialIcons direction="column" />
          </Box>
          <Box width="100%" justifyContent="center" display="flex">
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              textAlign="center"
              width="fit-content"
            >
              <Box display="flex" justifyContent="center" marginBlock=".5rem">
                <Image
                  w={{ base: "8rem", md: "10rem" }}
                  src={Jay}
                  alt="Jhunyour Icon"
                />
              </Box>
              <Heading
                fontSize={{ base: "3rem", md: "5rem" }}
                fontWeight="600"
                color="blaq"
              >
                Hello.
              </Heading>
              <Text
                color="blaq"
                fontWeight="500"
                fontSize={{ base: "1rem", md: "2rem" }}
              >
                I’m Muhammad Junior Adamu
              </Text>
              <Text color="blaq" fontSize={{ base: ".8rem", md: "1.5rem" }}>
                A Product Designer, Designing accessible experiences that
                matches users mental model
              </Text>
              <Flex
                marginBlock="1rem"
                flexDir={{ base: "column", md: "row" }}
                placeItems="center"
                justifyContent={{ base: "center", md: "space-around" }}
                color="blaq"
                w="50vw"
                display="flex"
                marginInline="auto"
              >
                <Flex width="fit-content" columnGap="1rem" alignItems="center">
                  <AiFillStar color="#FCD53F" />
                  <Text>Product Designer</Text>
                </Flex>
                <Flex width="fit-content" columnGap="1rem" alignItems="center">
                  <AiFillStar color="#FCD53F" />
                  <Text>Brand Designer</Text>
                </Flex>
                <Flex width="fit-content" columnGap="1rem" alignItems="center">
                  <AiOutlineStar color="#FCD53F" />
                  <Text color="#969696">Front-end Developer (In View)</Text>
                </Flex>
              </Flex>
              <Flex justifyContent="center" columnGap="3rem">
                <Box>
                  <Button
                    width={{ base: "8rem", md: "15rem" }}
                    colorScheme="primary"
                    _active={{ bgColor: "primary" }}
                    bgColor="transparent"
                    color="primary"
                    border="2px solid #093450"
                    fontSize={{ base: ".8rem", md: "1rem" }}
                  >
                    View My Resume
                  </Button>
                </Box>
                <Box>
                  <Button
                    fontSize={{ base: ".8rem", md: "1rem" }}
                    width={{ base: "8rem", md: "15rem" }}
                    colorScheme="primary"
                    _active={{ bgColor: "secondary" }}
                    bgColor="primary"
                    color="white"
                  >
                    About Me
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        alignItems="center"
        display={{ base: "none", md: "flex" }}
        color="primary"
        bgColor="#FCD53F"
        width="100vw"
      >
        <marquee>
          \\Scroll Down to See Projects \\ Scroll Down to See Projects \\ Scroll
          Down to See Projects \\ Scroll Down to See Projects \\ Scroll Down to
          See Projects \\ Scroll Down to See Projects \\ Scroll Down to See
          Projects
        </marquee>
      </Box>
    </>
  );
};

export default Home;

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SocialIcons from "../socialIcons";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const activeClassName = {
    color: "#093450",
    fontWeight: "900",
    textDecoration: "underline",
  };

  const notActiveClass = {
    color: "#093450",
    width: "fit-content",
  };

  const styleActiveLink = ({ isActive }) => {
    return isActive ? activeClassName : notActiveClass;
  };

  const viewResume = () => {
    document.location = "https://www.google.com";
  };

  return (
    <>
      <Flex
        bgColor="white"
        justifyContent="space-between"
        boxShadow="lg"
        height="70px"
        alignItems="center"
        paddingInline={{ base: "1.5rem", md: "6rem" }}
        zIndex="99"
        width="100vw"
      >
        <Box>
          <NavLink to="/">
            <Text fontWeight="600" color="primary" fontSize="1.5rem">
              Jhunyour
            </Text>
          </NavLink>
        </Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          columnGap="2rem"
          height="100%"
          alignItems="center"
        >
          <Flex w="20rem" justifyContent="space-around">
            <NavLink style={styleActiveLink} to="/">
              <Text color="primary">Project</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/about-me">
              <Text color="primary">About Me</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/contact-me">
              <Text color="primary">Contact Me</Text>
            </NavLink>
          </Flex>
          <Box>
            <Button
              colorScheme="primary"
              _active={{ bgColor: "secondary" }}
              bgColor="primary"
              color="white"
              onClick={viewResume}
            >
              Resume
            </Button>
          </Box>
        </Flex>
        <Box
          display={{ base: "flex", md: "none" }}
          onClick={() => setNavToggle(true)}
        >
          <GiHamburgerMenu />
        </Box>
      </Flex>
      {navToggle ? (
        <Box
          zIndex="100"
          brightness={12}
          display={{ base: "flex", md: "none" }}
          flexDir="column"
          alignItems="center"
          width="100%"
          height="100%"
          position="fixed"
          top="0"
          bgColor="black"
          justifyContent="space-between"
          onClick={() => setNavToggle(false)}
        >
          <Box
            position="absolute"
            top="0.5rem"
            right=".5rem"
            justifySelf="flex-end"
            color="red"
            fontSize="1.5rem"
            onClick={() => setNavToggle(false)}
          >
            <AiOutlineClose color="red" />
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignSelf="center"
            justifyContent="center"
            width="fit-content"
            mt="15rem"
          >
            <NavLink border="2px solid green" style={styleActiveLink} to="/">
              <Text color="white">Project</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/about-me">
              <Text color="white">About Me</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/contact-me">
              <Text color="white">Contact Me</Text>
            </NavLink>
            <Button
              mt="1rem"
              colorScheme="primary"
              _active={{ bgColor: "secondary" }}
              bgColor="primary"
              color="white"
              onClick={viewResume}
            >
              Resume
            </Button>
          </Box>
          <Flex color="white">
            <SocialIcons whyte="whyte" />
          </Flex>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;

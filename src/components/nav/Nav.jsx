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
        width="100vw">
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
          alignItems="center">
          <Flex
            className="navbar-container"
            w="20rem"
            justifyContent="space-around">
            <NavLink
              style={styleActiveLink}
              hoverStyle={{ fontWeight: "900" }}
              to="/#projects">
              <Text _hover={{ fontWeight: "900 !important" }} color="primary">
                Project
              </Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/about-me">
              <Text _hover={{ fontWeight: "900 !important" }} color="primary">
                About Me
              </Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/contact-me">
              <Text _hover={{ fontWeight: "900 !important" }} color="primary">
                Contact Me
              </Text>
            </NavLink>
          </Flex>
          <Box>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Pniow5sTRF7G-T8nkSylORoDUDj1HyNk/view?usp=share_link">
              <Button
                colorScheme="primary"
                _active={{ bgColor: "secondary" }}
                bgColor="primary"
                color="white"
                h="2.5rem"
                fontWeight="normal"
                _hover={{
                  bgColor: "transparent",
                  color: "black",
                  border: "2px solid #093450",
                }}>
                Resume
              </Button>
            </a>
          </Box>
        </Flex>
        <Box
          display={{ base: "flex", md: "none" }}
          onClick={() => setNavToggle(true)}>
          <GiHamburgerMenu />
        </Box>
      </Flex>
      {navToggle ? (
        <Box
          zIndex="999"
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
          onClick={() => setNavToggle(false)}>
          <Box
            position="absolute"
            top="0.5rem"
            right=".5rem"
            justifySelf="flex-end"
            color="red"
            fontSize="1.5rem"
            onClick={() => setNavToggle(false)}>
            <AiOutlineClose color="red" />
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignSelf="center"
            justifyContent="space-around"
            width="fit-content"
            mt="15rem"
            h="20vh">
            <NavLink border="2px solid green" style={styleActiveLink} to="/">
              <Text color="white">Project</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/about-me">
              <Text color="white">About Me</Text>
            </NavLink>
            <NavLink style={styleActiveLink} to="/contact-me">
              <Text color="white">Contact Me</Text>
            </NavLink>
          </Box>
          <Button
            mt="1rem"
            colorScheme="primary"
            h="2.5rem"
            fontWeight="normal"
            _active={{ bgColor: "secondary" }}
            bgColor="primary"
            color="white">
            Resume
          </Button>
          <Flex color="white">
            <SocialIcons whyte="whyte" />
          </Flex>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;

import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SocialIcons from "./socialIcons";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <Box
      paddingBlock="2rem"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg={`${pathname === "/contact-me" ? "transparent" : "white"}`}
    >
      <Box w="30%">
        <SocialIcons />
      </Box>
      <Text marginBlock="1rem">Jhunyouur@gmail.com</Text>
      <Text marginBlock="1rem">Jhunyour &copy; 2022</Text>
    </Box>
  );
};

export default Footer;

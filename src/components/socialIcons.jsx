import { Box, Image } from "@chakra-ui/react";
import Behance from "../assets/behance.svg";
import Dribble from "../assets/dribble.svg";
import IG from "../assets/ig.svg";
import LinkdIn from "../assets/linked.svg";
import Twitter from "../assets/twitter.svg";

const SocialIcons = ({ direction }) => {
  return (
    <Box
      display={direction ? `${direction}` : "flex"}
      alignContent="center"
      justifyContent="space-around"
      w="100%"
    >
      <a href="https://www.twitter.com/jhunyour">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          _hover={{ bgColor: "primary" }}
        >
          <Image src={Twitter} />
        </Box>
      </a>
      <a href="https://www.twitter.com/jhunyour">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          _hover={{ bgColor: "primary" }}
        >
          <Image src={Dribble} />
        </Box>
      </a>
      <a href="https://www.twitter.com/jhunyour">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          _hover={{ bgColor: "primary" }}
        >
          <Image src={Behance} />
        </Box>
      </a>
      <a href="https://www.twitter.com/jhunyour">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          _hover={{ bgColor: "primary" }}
        >
          <Image src={LinkdIn} />
        </Box>
      </a>
      <a href="https://www.twitter.com/jhunyour">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          _hover={{ bgColor: "primary" }}
        >
          <Image src={IG} />
        </Box>
      </a>
    </Box>
  );
};

export default SocialIcons;

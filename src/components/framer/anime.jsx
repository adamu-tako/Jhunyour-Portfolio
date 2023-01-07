import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Anime2 from "./anime2";
import Anime3 from "./anime3";
import Anime4 from "./anime4";
import Anime5 from "./anime5";

const Anime = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <Box p="10rem">
      <>
        <Box
          as={motion.div}
          mb="10rem"
          h="20rem"
          w="20rem"
          bgColor="green.300"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          animate={{
            x: animate ? "50rem" : 0,
            opacity: animate ? 1 : 0.5,
            rotate: animate ? 360 : 0,
            scale: animate ? 1.1 : 1,
          }}
          initial={{
            opacity: 0.5,
          }}
          transition={{
            stiffness: 10,
            type: "spring",
          }}
          onClick={() => setAnimate(!animate)}
        ></Box>
        <Anime2 />
        <Anime3 />
        <Anime4 />
        <Anime5 />
      </>
    </Box>
  );
};

export default Anime;

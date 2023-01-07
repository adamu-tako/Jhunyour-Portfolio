import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Anime2 = () => {
  return (
    <Box
      as={motion.div}
      mb="20rem"
      h="20rem"
      w="20rem"
      bgColor="green.300"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      drag
      dragConstraints={{
        left: -5,
        right: -20,
        top: 10,
        bottom: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    ></Box>
  );
};

export default Anime2;

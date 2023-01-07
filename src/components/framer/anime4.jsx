import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Anime4 = () => {
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
      animate={{
        scale: [1, 1.4, 1.4, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{
        duration: 2,
      }}
    >
      4
    </Box>
  );
};

export default Anime4;

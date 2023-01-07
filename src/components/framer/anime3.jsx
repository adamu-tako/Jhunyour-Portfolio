import { Box, List, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Amine3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      as={motion.div}
      h="20rem"
      w="20rem"
      mb="20rem"
      bgColor="green.300"
      display="flex"
      alignItems="center"
      justifyContent="center"
      variants={boxVariant}
      initial="hidden"
      animate="visible"
    >
      <UnorderedList listStyle="none">
        {[1, 2, 3].map((box) => (
          <List
            as={motion.li}
            key={box}
            w="2rem"
            variants={listVariant}
            h="2rem"
            bgColor="white"
            m="1rem"
          ></List>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Amine3;

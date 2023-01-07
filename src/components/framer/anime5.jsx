import { Box, Button, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const Anime5 = () => {
  const control = useAnimation();
  return (
    <>
      <Flex
        w="40rem"
        justifyContent="space-around"
        mb="2rem"
        fontWeight="normal"
      >
        <Button
          onClick={() => {
            control.start({
              x: "50rem",
              transition: { duration: 2 },
            });
          }}
          bgColor="blue.300"
          colorScheme="blue"
          _active={{ bgColor: "black" }}
        >
          Move Right
        </Button>
        <Button
          onClick={() => {
            control.start({
              x: 0,
              transition: { duration: 2 },
            });
          }}
          bgColor="blue.300"
          colorScheme="blue"
          _active={{ bgColor: "black" }}
        >
          Move Left
        </Button>
        <Button
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: { duration: 1 },
            });
          }}
          bgColor="blue.300"
          colorScheme="blue"
          _active={{ bgColor: "black" }}
        >
          Circle
        </Button>
        <Button
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: { duration: 1 },
            });
          }}
          bgColor="blue.300"
          colorScheme="blue"
          _active={{ bgColor: "black" }}
        >
          Square
        </Button>
        <Button
          onClick={() => {
            control.stop();
          }}
          bgColor="blue.300"
          colorScheme="blue"
          _active={{ bgColor: "black" }}
        >
          Stop
        </Button>
      </Flex>
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
        animate={control}
      >
        4
      </Box>
    </>
  );
};

export default Anime5;

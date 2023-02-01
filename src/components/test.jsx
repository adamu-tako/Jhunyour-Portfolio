import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Jhunyour from "../assets/jhunyour.webp";

const Test = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <Box>
      <Box
        as={motion.div}
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{
          duration: 2,
        }}
        onViewportEnter={() => setIsInView(true)}
        viewport={{ once: true }}>
        <Image
          src={Jhunyour}
          onLoad={() => setIsLoaded(true)}
          alt="Muhammad Jhunyour's Photo"
        />
      </Box>
    </Box>
  );
};

export default Test;

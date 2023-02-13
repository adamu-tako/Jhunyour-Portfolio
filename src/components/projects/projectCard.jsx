import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projectcard = ({ project }) => {
  return (
    <Link
      to={
        project.branding
          ? `/projects/branding/${project.projectId}`
          : project.tag === "UI/UX Task"
          ? `/projects/ui-ux-task/${project.projectId}`
          : `/projects/case-studies/${project.projectId}`
      }>
      <Box
        as={motion.div}
        w={{ base: "15rem", md: "25rem" }}
        h={{ base: "18rem", md: "23rem" }}
        _hover={{
          boxShadow: "lg",
        }}
        whileHover={{
          scale: 1.1,
        }}
        fontSize=".6rem">
        <Image src={project.smallImage} />
        <Box ml="1rem" mt="0.5rem" rowGap={1}>
          <Text fontSize="1rem" paddingBottom=".4rem" fontWeight="500">
            {project.title}
          </Text>
          <Flex columnGap={2}>
            <Box
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h=".8rem"
              w="fit-content"
              bgColor="#DCEEFF"
              color="#256DF8"
              p=".8rem">
              {project.tag}
            </Box>
            <Box
              h=".8rem"
              w="fit-content"
              p=".8rem"
              bgColor={project.liveProjectLink ? "#ECFFE8" : "#FFEEFE"}
              color={project.liveProjectLink ? "#2DC806" : "#F851DD"}
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center">
              {project.liveProjectLink ? "Live Project" : "Figma Prototype"}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Projectcard;

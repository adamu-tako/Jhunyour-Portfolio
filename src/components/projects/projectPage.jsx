import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LinkIcon from "../../assets/linkIcon.png";
import projects from "../../assets/projects/projects";
import prevIcon from "../../assets/prevIcon.png";
import nextIcon from "../../assets/nextIcon.png";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [projectId, setProjectId] = useState(Number(id));
  const [loading, setLoading] = useState(false);

  const getProjectDetails = () => {
    setLoading(true);
    const proj = projects.filter(
      (project) => project.projectId === Number(projectId)
    );
    setProject(proj[0]);
    setLoading(false);
  };

  useEffect(() => {
    getProjectDetails();
  }, [projectId]);

  const handleNavigationPrev = () => {
    setLoading(true);
    if (projectId > 1) {
      setProjectId((prev) => prev - 1);
      window.scrollTo(0, 0);
    } else {
      console.error("excepton");
    }
    setLoading(false);
  };

  const handleNavigationNext = () => {
    if (projectId < projects.length) {
      setProjectId((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      return;
    }
  };

  return (
    <Box bgColor="white" paddingBottom="2rem" w="auto" minH="50vh">
      {project && (
        <>
          {loading ? (
            <Box
              pt="3rem"
              h="80vh"
              w="98vw"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Spinner />
            </Box>
          ) : (
            <>
              <Box pt="3rem">
                <Box
                  w="60vw"
                  textAlign="center"
                  marginInline="auto"
                  marginBlock="1rem">
                  <Heading>{project.projectName}</Heading>
                  <Text>{project.projectDescription}</Text>
                </Box>
                <Flex
                  marginInline="auto"
                  borderRadius="full"
                  p=".3rem"
                  alignItems="center"
                  justifyContent="center"
                  w="20rem"
                  bgColor="#D6EEFD">
                  <Image src={LinkIcon} />
                  <Text>Link to Figma prototype </Text>
                </Flex>
                <Box>
                  {project?.images.map((image, i) => (
                    <Image key={i} src={image} />
                  ))}
                </Box>
              </Box>
              <Flex
                marginInline="auto"
                borderRadius="full"
                p=".3rem"
                alignItems="center"
                justifyContent="center"
                w="20rem"
                bgColor="#D6EEFD">
                <Image src={LinkIcon} />
                <Text>Link to Figma prototype </Text>
              </Flex>
            </>
          )}
        </>
      )}
      <Flex
        marginBlock="3rem"
        w="80%"
        marginInline="auto"
        justifyContent="space-between"
        alignItems="center">
        <Flex
          as={motion.div}
          whileHover={{
            scale: 1.2,
          }}
          columnGap="1rem"
          cursor="pointer"
          alignItems="center"
          onClick={handleNavigationPrev}>
          <Image src={prevIcon} />
          <Text>Previous</Text>
        </Flex>
        <Flex
          as={motion.div}
          whileHover={{
            scale: 1.2,
          }}
          columnGap="1rem"
          cursor="pointer"
          alignItems="center"
          onClick={handleNavigationNext}>
          <Text>Next</Text>
          <Image src={nextIcon} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectPage;

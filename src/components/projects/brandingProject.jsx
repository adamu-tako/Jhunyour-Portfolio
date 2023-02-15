import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LinkIcon from "../../assets/linkIcon.png";
import projects from "../../assets/projects/projects";
import prevIcon from "../../assets/prevIcon.png";
import nextIcon from "../../assets/nextIcon.png";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BrandingProject = () => {
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
                  <Text marginBlock="1rem" fontSize="xl" fontWeight="400">
                    {project.projectDescription}
                  </Text>
                </Box>
                {project.branding ? (
                  <Box paddingInline="6rem">
                    <Flex marginBlock="1rem" columnGap=".5rem">
                      <Text fontSize="2xl"> Client:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Client}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap=".5rem">
                      <Text fontSize="2xl"> Timeline:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Timeline}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap=".5rem">
                      <Text fontSize="2xl"> Roles:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Roles}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap=".5rem">
                      <Text fontSize="2xl"> Year:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Year}
                      </Text>
                    </Flex>
                  </Box>
                ) : null}
                <Box paddingInline="6rem">
                  <Image src={project?.images[0]} />
                  <Text
                    fontSize="2xl"
                    fontWeight="500"
                    marginTop="2rem"
                    marginBottom="1rem">
                    Design Process & Styles
                  </Text>
                  <Image src={project?.images[1]} />
                  <Text
                    fontSize="2xl"
                    fontWeight="500"
                    marginTop="2rem"
                    marginBottom="1rem">
                    Snapshots
                  </Text>
                  <Wrap>
                    <WrapItem>
                      <Image src={project?.images[2]} />
                    </WrapItem>
                    <WrapItem>
                      <Image src={project?.images[3]} />
                    </WrapItem>
                    <WrapItem>
                      <Image src={project?.images[4]} />
                    </WrapItem>
                    <WrapItem>
                      <Image src={project?.images[5]} />
                    </WrapItem>
                  </Wrap>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default BrandingProject;

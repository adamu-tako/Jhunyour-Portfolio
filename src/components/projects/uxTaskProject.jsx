import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import projects from "../../assets/projects/projects";
import { Spinner } from "@chakra-ui/react";

const UxTaskProject = () => {
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
                {project.tag === "UI?UX Task" ? (
                  <Box paddingInline="6rem">
                    <Image src={project?.images[0]} />
                    <Flex marginBlock="1rem" columnGap="2rem">
                      <Text fontSize="2xl"> CLient:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Client}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap="2rem">
                      <Text fontSize="2xl"> Timeline:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Timeline}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap="2rem">
                      <Text fontSize="2xl"> Roles:</Text>
                      <Text fontSize="2xl" fontWeight="500">
                        {project.branding.Roles}
                      </Text>
                    </Flex>
                    <Flex marginBlock="1rem" columnGap="2rem">
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

export default UxTaskProject;

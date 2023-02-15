import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
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
    <Box
      bgColor="white"
      paddingBottom="2rem"
      w="auto"
      minH="50vh"
      paddingInline={{ base: "1rem", md: "6rem" }}>
      <Box pt="3rem">
        {/* <Box w="60vw" textAlign="center" marginInline="auto" marginBlock="1rem">
          <Heading>{project?.projectName}</Heading>
          <Text marginBlock="1rem" fontSize="xl" fontWeight="400">
            {project?.projectDescription}
          </Text>
        </Box> */}
        <Image src={project?.images[0]} />
      </Box>
      <Box marginBlock="1rem">
        {project?.description.map((desc) => (
          <>
            <Text marginBlock=".5rem" fontSize="2xl" fontWeight="500">
              {desc.heading}
            </Text>
            <Text>{desc.text}</Text>
            <UnorderedList>
              {desc.list
                ? desc.list.map((list) => (
                    <>
                      <ListItem>{list}</ListItem>
                    </>
                  ))
                : null}
            </UnorderedList>
          </>
        ))}
      </Box>
      <Box>
        {project?.sections.map((section) => (
          <>
            <Text
              marginTop="2rem"
              marginBottom=".5rem"
              fontSize="2xl"
              fontWeight="600">
              {section.heading}
            </Text>
            {section.text ? (
              <Text marginBlock=".3rem">{section.text}</Text>
            ) : null}
            {section.images.map((image) => (
              <Image src={image} marginBlock="1rem" />
            ))}
          </>
        ))}
      </Box>
      <Box>
        <Box marginBlock="2rem">
          {project?.footer.map((foot) => (
            <Box marginBlock="1.5rem">
              <Text marginBottom=".4rem" fontSize="2xl" fontWeight="500">
                {foot.heading}
              </Text>
              <Text>{foot.text}</Text>
              <UnorderedList>
                {foot.list
                  ? foot.list.map((list) => (
                      <>
                        <ListItem>{list}</ListItem>
                      </>
                    ))
                  : null}
              </UnorderedList>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UxTaskProject;

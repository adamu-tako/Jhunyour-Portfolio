import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import projects from "../../assets/projects/projects";
import Projectcard from "./projectCard";

const ProjectView = () => {
  const tabs = ["All Projects", "Case Studies", "UI/UX Task", "Branding"];
  return (
    <>
      <Tabs colorScheme="primary">
        <TabList
          marginLeft={{ base: "0", md: "4rem" }}
          w={{ base: "100%", md: "90%" }}>
          {tabs.map((tab, i) => (
            <Tab
              _selected={{
                fontWeight: "bold",
                borderBottom: "2px solid #093450",
              }}
              color="primary"
              fontSize={{ base: ".7rem", md: "1rem" }}
              key={i}>
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((i) => (
            <TabPanel key={i}>
              <Wrap
                bgColor="white"
                w="fit-content"
                h="fit-content"
                p="3rem"
                spacing={6}
                justify="center"
                marginInline="auto">
                {projects.map((project, i) => (
                  <WrapItem key={i}>
                    <Projectcard project={project} />
                  </WrapItem>
                ))}
              </Wrap>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProjectView;

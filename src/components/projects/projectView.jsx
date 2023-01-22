import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import projects from "../../assets/projects/projects";
import Projectcard from "./projectCard";

const ProjectView = () => {
  const tabs = ["All Projects", "Case Studies", "UI/UX Task", "Branding"];
  return (
    <>
      <Tabs colorScheme="primary">
        <TabList w="100%" marginLeft={{ base: "0", md: "4rem" }}>
          {tabs.map((tab, i) => (
            <Tab
              _selected={{
                fontWeight: "bold",
                borderBottom: "2px solid #093450",
              }}
              fontSize=".7rem"
              key={i}
            >
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
                spacing={6}
                justify="center"
                marginInline="auto"
              >
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

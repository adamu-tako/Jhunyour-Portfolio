import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Jhunyour from "../../assets/jhunyour.png";
import { Resume } from "../../assets/resume";
import SocialIcons from "../socialIcons";

const AboutMe = () => {
  const navigate = useNavigate();
  const contactMe = () => {
    navigate("/contact-me");
  };
  return (
    <Box paddingInline={{ base: "2rem", md: "6rem" }} bgColor="white">
      <Box
        paddingBlock={{ base: "1rem", md: "2.5rem" }}
        display={{ base: "column", md: "flex" }}
        columnGap="2rem"
        justifyContent="space-between"
      >
        <Box marginBottom="2rem" width={{ base: "80vw", md: "40vw" }}>
          <Heading
            marginBlock="1rem"
            textDecoration="underline"
            fontSize="1.25rem"
          >
            Meet Muhammad Junior Adamu
          </Heading>
          <Box width={{ base: "100%", md: "90%" }}>
            <Text>
              Hello, I am a passionate product and brand designer with four
              years of experience in design. I have contributed to the growth of
              startups and also involved in improving the experiences and
              usability of digital products accross E-commerce, Fintech, Edtech,
              Medtech, dashboards, mobile apps, websites and operating systems.
            </Text>
            <Text marginBlock="1rem">
              I also founded a non-profit design circle where i mentor newbies
              in the design field to the best of my knowledge and experience.{" "}
            </Text>
            <Text>
              Creativity is an integral part of my life. I love to learn stuff.
              Design stuff. Imagine stuff and Recreate the whole circle over and
              over using structured accessibility guidelines to meet end users
              needs and as well meet business goals.
            </Text>
          </Box>
          <Box marginTop="2.5rem">
            <Button
              colorScheme="primary"
              _active={{ bgColor: "secondary" }}
              bgColor="primary"
              color="white"
              onClick={contactMe}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
        <Box>
          <Box marginBottom="1rem">
            <SocialIcons />
          </Box>
          <Image src={Jhunyour} alt="Muhammad Jhunyour's Photo" />
        </Box>
      </Box>
      <Box paddingBottom="2rem">
        <Box display={{ base: "none", md: "flex" }}>
          <Tabs colorScheme="primary">
            <TabList>
              {Resume.map((tab, i) => (
                <Tab key={i}>{tab.tab}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {Resume.map((tab, index) => (
                <TabPanel key={index} p={5}>
                  {tab.content.map((tab, i) => (
                    <Box
                      key={i}
                      my="1rem"
                      paddingInline="1rem"
                      borderLeft="4px solid #093450"
                    >
                      <Text fontWeight="600">{tab.title}</Text>
                      <Text fontWeight="500">{tab.subtitle}</Text>
                      <Text fontWeight="400">{tab.location}</Text>
                    </Box>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          marginTop="2rem"
          width="100%"
          display={{ base: "flex", md: "none" }}
        >
          <Accordion minWidth="100vw">
            {Resume.map((tab, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Text as="span" flex="1" textAlign="left">
                      {tab.tab}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                {tab.content.map((tab, i) => (
                  <AccordionPanel key={i} pb="0.5rem">
                    <Box
                      key={i}
                      my="1rem"
                      paddingInline="1rem"
                      borderLeft="4px solid #093450"
                    >
                      <Text fontWeight="600">{tab.title}</Text>
                      <Text fontWeight="500">{tab.subtitle}</Text>
                      <Text fontWeight="400">{tab.location}</Text>
                    </Box>
                  </AccordionPanel>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;

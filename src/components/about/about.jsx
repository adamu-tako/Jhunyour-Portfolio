import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jhunyour from "../../assets/jhunyour.webp";
import { Resume } from "../../assets/resume";
import SocialIcons from "../socialIcons";

const AboutMe = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

    const marqueeVariants = {
      animate: {
        WebkitMaskImage: visibleMask,
        maskImage: visibleMask,
        transition: {
          duration: 1,
          ease: "linear",
        },
      },
    };

    const contactMe = () => {
      navigate("/contact-me");
    };

    const boxVariant = {
      hidden: {
        x: "-100vw",
      },
      visible: {
        x: 0,
        transition: {
          delay: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

    const ItemVariant = {
      hidden: {
        x: "40vw",
      },
      visible: {
        x: 0,
        transition: {
          delay: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

    const listVariant = {
      hidden: {
        y: -15,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    return (
      <Box
        paddingInline={{ base: "1rem", md: "6rem" }}
        mt="1.5rem"
        bgColor="white">
        <Box
          paddingBlock={{ base: "1rem", md: "2.5rem" }}
          display={{ base: "column", md: "flex" }}
          columnGap="2rem"
          justifyContent="space-between">
          <Box
            as={motion.div}
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            marginBottom="2rem"
            width={{ base: "80vw", md: "40vw" }}>
            <Heading
              marginBlock="1rem"
              textDecoration="underline"
              fontSize={{ base: "1rem", md: "1.25rem" }}>
              Meet Muhammad Junior Adamu
            </Heading>
            <Box
              fontSize={{ base: ".8rem", md: "1rem" }}
              width={{ base: "100%", md: "90%" }}
              lineHeight="2rem">
              <Text as={motion.p} variants={listVariant}>
                Hello, I am a passionate product and brand designer with four
                years of experience in design. I have contributed to the growth
                of startups and also involved in improving the experiences and
                usability of digital products accross E-commerce, Fintech,
                Edutech, Medtech, dashboards, mobile apps, websites and
                operating systems.
              </Text>
              <Text as={motion.p} variants={listVariant} marginBlock="1rem">
                I also founded a non-profit design circle where i mentor newbies
                in the design field to the best of my knowledge and experience.{" "}
              </Text>
              <Text as={motion.p} variants={listVariant}>
                Creativity is an integral part of my life. I love to learn
                stuff. Design stuff. Imagine stuff and Recreate the whole circle
                over and over using structured accessibility guidelines to meet
                end users needs and as well meet business goals.
              </Text>
            </Box>
            <Box marginTop="2.5rem">
              <Button
                colorScheme="primary"
                _active={{ bgColor: "secondary" }}
                bgColor="primary"
                h="2.5rem"
                fontWeight="normal"
                color="white"
                onClick={contactMe}>
                Contact Me
              </Button>
            </Box>
          </Box>
          <Box variants={boxVariant}>
            <Box marginBottom="1rem">
              <SocialIcons />
            </Box>
            <Box
              as={motion.div}
              initial={false}
              animate={
                isLoaded && isInView
                  ? "animate"
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              variants={marqueeVariants}
              onViewportEnter={() => setIsInView(true)}
              viewport={{ once: true }}>
              <Image
                src={Jhunyour}
                onLoad={() => setIsLoaded(true)}
                alt="Muhammad Jhunyour's Photo"
              />
            </Box>
            {/* <Image
            as={motion.img}
            initial={{ y: "-80%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 5,
              staggerChildren: 1,
            }}
            src={Jhunyour}
            onLoad={() => setIsLoaded(true)}
            alt="Muhammad Jhunyour's Photo"
          /> */}
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
                    <SimpleGrid columns={tab.tab === "Tools" ? "3" : null}>
                      {tab.content.map((tab, i) => (
                        <Box
                          key={i}
                          my="1rem"
                          paddingInline="1rem"
                          borderLeft="4px solid #093450"
                          as={motion.div}
                          variants={ItemVariant}
                          initial="hidden"
                          whileInView="visible">
                          <Text
                            as={motion.p}
                            variants={listVariant}
                            fontWeight="600">
                            {tab.title}
                          </Text>
                          <Flex columnGap=".5rem">
                            <Text
                              as={motion.p}
                              variants={listVariant}
                              fontWeight="500">
                              {tab.subtitle}
                            </Text>
                            {tab.link ? (
                              <Link
                                as={motion.p}
                                variants={listVariant}
                                href={tab.link}
                                isExternal
                                color="#256df8"
                                textDecoration="underline">
                                Link to Verify
                              </Link>
                            ) : null}
                          </Flex>
                          <Text
                            as={motion.p}
                            variants={listVariant}
                            fontWeight="400">
                            {tab.location}
                          </Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
          <Box
            marginTop="2rem"
            width="100%"
            display={{ base: "flex", md: "none" }}>
            <Accordion minWidth="90vw">
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
                        borderLeft="4px solid #093450">
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

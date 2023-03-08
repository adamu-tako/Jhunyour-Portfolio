import { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import theme from "./utils/themes";
import AboutMe from "./components/about/about";
import ContactMe from "./components/contact/contact";
import Footer from "./components/footer";
import Home from "./components/landingPage";
import Bg from "./assets/background.webp";
import ProjectPage from "./components/projects/projectPage";
import BrandingProject from "./components/projects/brandingProject";
import Test from "./components/test";
import UxTaskProject from "./components/projects/uxTaskProject";

function App() {
  const { pathname } = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Box
        zIndex="1"
        bgImage={Bg}
        bgPosition="fixed"
        bgSize="cover"
        bgRepeat="no-repeat"
        scrollPaddingTop="600px"
        minH="30vh">
        <Box minH="calc(80vh - 100px)">
          <Box position="fixed" w="100vw" zIndex={100}>
            <Navbar />
          </Box>
          <Box pt="3rem">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="/test" element={<Test />} />
              <Route
                path="/projects/case-studies/:id"
                element={<ProjectPage />}
              />
              <Route
                path="/projects/branding/:id"
                element={<BrandingProject />}
              />
              <Route
                path="/projects/ui-ux-task/:id"
                element={<UxTaskProject />}
              />
            </Routes>
          </Box>
        </Box>
        {pathname !== "/" ? <Footer /> : null}
      </Box>
    </ChakraProvider>
  );
}

export default App;

import { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import theme from "./utils/themes";
import AboutMe from "./components/about/about";
import ContactMe from "./components/contact/contact";
import Footer from "./components/footer";
import Home from "./components/landingPage";
import Bg from "./assets/background.png";

function App() {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Box
        zIndex="1"
        bgImage={Bg}
        bgPosition="fixed"
        bgSize="cover"
        bgRepeat="no-repeat"
        minH="100vh"
        fontFamily="primary"
      >
        <Box position="fixed" w="100vw" zIndex={99}>
          <Navbar />
        </Box>
        <Box pt="3rem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </Box>
        {pathname !== "/" ? <Footer /> : null}
      </Box>
    </ChakraProvider>
  );
}

export default App;

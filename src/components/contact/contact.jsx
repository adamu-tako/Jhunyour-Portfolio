import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleInput = (key, value) => {
    setMessageForm((prevInput) => {
      const inputCopy = { ...prevInput, [key]: value };
      return inputCopy;
    });
  };

  const sendMessage = () => {
    console.log("send message");
    console.log(messageForm);

    emailjs
      .sendForm(
        "service_51ss8o8",
        "template_vgr65a1",
        formRef.current,
        "K3UmQ-3ku87fZ9qag"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box
      justifyContent="center"
      display="flex"
      flexDir="column"
      paddingBlock="2rem"
      bgColor="transparent"
      alignItems="center">
      <Box w={{ base: "90%", md: "40%" }}>
        <form ref={formRef} style={{ width: "100%" }}>
          <FormControl textAlign="center" onSubmit={sendMessage}>
            <Heading
              marginY="1rem"
              textDecoration="underline"
              fontSize="1.25rem">
              Contact Me
            </Heading>
            <Text marginY="1rem">
              Fill up the form let’s create something New!
            </Text>
            <FormControl marginY="2rem" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={messageForm.name}
                name="name"
                type="text"
                bgColor="white"
                _focus={{
                  border: "1px solid #093450",
                  boxShadow: "none",
                }}
                placeholder="Your Name"
                onChange={(e) => handleInput("name", e.target.value)}
              />
            </FormControl>
            <FormControl marginY="2rem" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                value={messageForm.email}
                type="text"
                name="email"
                bgColor="white"
                _focus={{
                  border: "1px solid #093450",
                  boxShadow: "none",
                }}
                placeholder="Your Email Address"
                onChange={(e) => handleInput("email", e.target.value)}
              />
            </FormControl>
            <FormControl marginY="2rem" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                value={messageForm.message}
                height="8rem"
                type="text"
                name="message"
                _focus={{
                  border: "1px solid #093450",
                  boxShadow: "none",
                }}
                bgColor="white"
                placeholder="Your Message"
                onChange={(e) => handleInput("message", e.target.value)}
              />
            </FormControl>
            <Box my="2rem">
              <Button
                width="100%"
                colorScheme="primary"
                _active={{ bgColor: "secondary" }}
                bgColor="primary"
                color="white"
                h="2.5rem"
                fontWeight="normal"
                onClick={sendMessage}>
                Resume
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;

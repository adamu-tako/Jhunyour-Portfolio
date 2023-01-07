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
import { useState } from "react";

const ContactMe = () => {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (key, value) => {
    setMessageForm((prevInput) => {
      const inputCopy = { ...prevInput, [key]: value };
      return inputCopy;
    });
  };

  const sendMessage = () => {
    console.log("send message");
    console.log(messageForm);
  };
  return (
    <Box
      justifyContent="center"
      display="flex"
      flexDir="column"
      paddingBlock="2rem"
      bgColor="transparent"
      alignItems="center"
    >
      <FormControl
        textAlign="center"
        w={{ base: "90%", md: "40%" }}
        onSubmit={sendMessage}
      >
        <Heading marginY="1rem" textDecoration="underline" fontSize="1.25rem">
          Contact Me
        </Heading>
        <Text marginY="1rem">Fill up the form let’s create something New!</Text>
        <FormControl marginY="2rem" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={messageForm.name}
            type="text"
            bgColor="white"
            placeholder="Your Name"
            onChange={(e) => handleInput("name", e.target.value)}
          />
        </FormControl>
        <FormControl marginY="2rem" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            value={messageForm.email}
            type="text"
            bgColor="white"
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
            onClick={sendMessage}
          >
            Resume
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default ContactMe;

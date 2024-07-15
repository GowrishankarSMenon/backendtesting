import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Link, Text } from "@chakra-ui/react";
import FormController from "../helper/FormController";
import PasswordInput from "../helper/PasswordInput";

const SignupBox = () => {

  // const 

  const [input, setInput] = useState();

  const handleChange = () => {
    console.log("sign up page");
  };

  return (
    <>
      <FormController lable='Enter Email Address' placeholder='Enter Email Address' handleChange={handleChange}/>
      <FormController lable='Enter Login ID ' placeholder='Enter your Login Id' handleChange={handleChange}/>

      <FormControl isRequired my='1em'>
        <FormLabel>Enter Password</FormLabel>
        <PasswordInput />
      </FormControl>

      <FormControl isRequired my='1em'>
        <FormLabel>Confirm Password</FormLabel>
        <PasswordInput />
      </FormControl>
      <Box className="checkBox_box">
        <Text size='sm'>By signing up, you are agreeing to <Link color='blue.900'>Privacy Policy</Link> </Text>
        <Button colorScheme="blue" bg='#4160D8' w='35%'>Register Me</Button>
      </Box>
    </>
  )
}

export default SignupBox;
import { Box, Button, FormControl, FormLabel, Link, Text } from "@chakra-ui/react";
import FormController from "../helper/FormController";
import PasswordInput from "../helper/PasswordInput";

const SignupBox = () => {
  return (
    <>
      <FormController lable='Enter Email Address' placeholder='Enter Email Address' />
      <FormController lable='Enter Login ID ' placeholder='Enter your Login Id' />

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
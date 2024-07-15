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
      <FormController
        label="Enter Email Address"
        placeholder="Enter Email Address"
        Required={true}
        handleChange={handleChange}
      />
      <FormController
        label="Enter Login ID "
        Required={true}
        placeholder="Enter Login Id"
        undertext={"(Login ID should be atleast 5 characters)"}
        handleChange={handleChange}
      />

      <FormControl isRequired my="1em">
        <FormLabel>Enter Password</FormLabel>
        <PasswordInput placeholder={"Enter Password"} />
        <p className="p-1 text-gray-500 text-sm">
          (Password should be atleast 5 character)
        </p>
      </FormControl>

      <FormControl isRequired my="1em">
        <FormLabel>Confirm Password</FormLabel>
        <PasswordInput placeholder={"Confirm Password"} />
      </FormControl>
      <Box className="md:flex justify-between items-center">
        <Text size="sm">
          By signing up, you are agreeing to{" "}
          <Link>
            <span className="text-blue-600 underline">Privacy Policy</span>
          </Link>{" "}
        </Text>
        <Button colorScheme="blue" bg="#4160D8" className=" w-full md:w-40  mt-5 md:mt-0">
          Register
        </Button>
      </Box>
    </>
  );
}

export default SignupBox;
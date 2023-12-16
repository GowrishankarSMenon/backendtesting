import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Box,
  Button,
} from "@chakra-ui/react";
import assets from "../assests";
import PasswordInput from "../helper/PasswordInput";
// import { Link } from "react-router-dom"
import { Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import FormController from "../helper/FormController";
import { useEffect } from "react";

const Loginbox = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    console.log("login up page");
  };
  const login = () => {
    console.log("sign up");
    localStorage.setItem("login", true);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login_box">
      <FormController
        lable="Login Id"
        placeholder="Enter your Login Id"
        handleChange={handleChange}
      />

      <FormControl isRequired my="1em">
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput />
      </FormControl>

      <Box className="checkBox_box">
        <Checkbox size="sm" colorScheme="blue">
          Remember credentials
        </Checkbox>
        <Link color="red.400" fontSize="sm" href="/password">
          Forget Password
        </Link>
      </Box>
      <Box className="login_submit">
        <Button
          colorScheme="blue"
          bg="#4160D8"
          size="md"
          my="1em"
          w="30%"
          onClick={login}
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};

export default Loginbox;

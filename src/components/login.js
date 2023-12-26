import React, { useState } from "react";
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

  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const loginHandle = () => {
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
    <Box className="login_box">
      <FormController
        lable="Login Id"
        placeholder="Enter your Login Id"
        handleChange={(e) => handleChange(e)}
        value={login.userId}
        name="userId"
        id="userId"
      />

      <FormControl isRequired my="1em">
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput
          handleChange={(e) => handleChange(e)}
          value={login.userId}
          name="password"
          id="password"
        />
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
          onClick={loginHandle}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Loginbox;

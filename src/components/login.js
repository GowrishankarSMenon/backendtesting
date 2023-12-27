import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import assets from "../assests";

//chakar-ui
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

//react-router
// import { Link } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";

//components
import FormController from "../helper/FormController";
import Alert_Popup from "../modal/Alert_Popup";
import PasswordInput from "../helper/PasswordInput";


const initialValues = {
  userId: "",
  password: "",
}

const Loginbox = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (values.userId !== "" && values.password !== "") {
        console.log("sign in");
        console.log("Formik Values", values);
        setAlertError(false);
        // localStorage.setItem("login", true);
        // navigate("/");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);
      } else {
        console.log("sign up");
        console.log("Formik Values", values);
        setAlertError(true);
      }
    },
    validate: values => {
      
    }
  });

  console.log("====================================");
  console.log("Login: ", formik.values);
  console.log("====================================");

  const [alertError, setAlertError] = useState(false);
  // const [login, setLogin] = useState()

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, []);

  return (
    <Box className="login_box">
      {alertError != false ? (
        <Alert_Popup title="Input Should not be empty!" error="error" />
      ) : null}
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <FormController
            lable="Login Id"
            placeholder="Enter your Login Id"
            handleChange={formik.handleChange}
            value={formik.values.userId}
            name="userId"
            id="userId"
            Required={true}
          />

          <FormControl isRequired my="1em">
            <FormLabel>Enter your Password</FormLabel>
            <PasswordInput
              handleChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              id="password"
              Required={true}
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
              type="submit"
              colorScheme="blue"
              bg="#4160D8"
              size="md"
              my="1em"
              w="30%"
            >
              Log In
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Loginbox;

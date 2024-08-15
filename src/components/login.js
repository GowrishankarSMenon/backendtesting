import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";
import assets from "../assests";
import instance from "../axiosApis/baseUrl";
import { jwtDecode } from 'jwt-decode'

//chakar-ui
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Box,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

//react-router
// import { Link } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";

//components
import FormController from "../helper/FormController";
import PasswordInput from "../helper/PasswordInput";

const initialValues = {
  userId: "",
  password: "",
};

const Loginbox = () => {
  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const loginApi = (values) => {
    
    let data = {
      UserName: values.userId,
      Password: values.password,
      EncryptID: "[\\",
    };
    console.log("Login Api: ", data);

    instance
      .post("Auth/LoginPortalUser", data)
      .then((response) => {
        // Handle the response
        console.log("REquest Post", response);
        if (response.status === 200) {
          localStorage.setItem("login", true);
          setCookie("token_Key", response.data.token, 1)
          
          
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }, 2000);
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        setLoading(false);
      });
  };

  const onSubmit = (values) => {
    if (values.userId !== "" && values.password !== "") {
      loginApi(values);
      setLoading(!false);
    } else {
      setLoading(false);
      console.log("sign up");
      console.log("Formik Values", values);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.userId) {
      errors.userId = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login=="true") {
      navigate("/");
    }
  }, []);

  return (
    <Box className="w-full">
      <form onSubmit={formik.handleSubmit}>
        <Box >
          <FormController
            label="Login Id"
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
              placeholder={"Enter password"}
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
              {loading !== true ? (
                "Log In"
              ) : (
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              )}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Loginbox;

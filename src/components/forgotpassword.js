import React from "react";
import {
    Text,
    Box,
    Button,
  } from "@chakra-ui/react";
//helper
import FormController from "../helper/FormController";

const ForgotPassword = () => {
  return (
    <div className="forgot_container">
      <div className="forgot_box">
        <h4 className="forgot_title h4">Forgotten your password?</h4>
        <div className="para_wrapper">
          <Text>
            There is nothing to worry about ,Please enter your registered email
            address with us and your credentials will be sent to your inbox.
          </Text>
        </div>
        <div className="input_wrapper">
            <FormController
                lable="Enter Email Address"
                placeholder="Enter registered email"
            />
        </div>
        <div className="button_container">
            <Box className="button_wrapper" display="flex" alignItems="center" justifyContent="space-between">
                <Button colorScheme="blue" variant='outline' size="md" my="1em" w="46%">
                    Back to Login
                </Button>
                <Button colorScheme="blue" bg="#4160D8" size="md" my="1em" w="50%">
                    Request Username/Password
                </Button>
            </Box>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

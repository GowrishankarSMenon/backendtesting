import { useEffect, useState } from "react";

// routing
import { Link, NavLink } from "react-router-dom";

// Assets
import assets from "../assests";

// layout-style-ui
import { Text, Button } from "@chakra-ui/react";

// components
import Loginbox from "../components/login";
import SignupBox from "../components/Signup";

// CSS
import "../assests/styles.css";

const Registration = () => {
  // const [status, setStatus] = useState(true);

  let url = window.location.href.split("/");

  // console.log("url: ", url[url.length - 1]);

  // useEffect(() => {
  //   console.log(status, "fffdsc");
  // }, [status, statusLink]);

  return (
    <div className="flex overflow-hidden md:gap-5 p-7 md:p-0">
      <div className="md:block hidden">
        <img src={assets.images.LOGIN.BANNER} alt="" />
      </div>
      <div className="md:w-1/2 w-full h-1/3 md:p-8 md:border-2 md:mr-8 md:border-gray-300 md:rounded-2xl">
        <Text className="md:text-2xl text-lg font-bold md:text-left">
          Welcome to Alchemus
        </Text>
        <div className="login_signupToggle">
          <NavLink to="/login" onClick={() => console.log("Login page")}>
            Login
          </NavLink>
          <NavLink to="/registration" onClick={() => console.log("Register")}>
            Registration
          </NavLink>
          {/* <Button
              className="link-button"
              colorScheme={status ? "" : "blue"}
              bg={status ? "" : "#4160D8"}
              color={status ? "black" : "white"}
              borderRadius="5em"
              w="100%"
              variant="solid"
              onClick={() => {
                setStatus(false);
              }}
            >
              Registration
            </Button> */}
        </div>
        {url[url.length - 1] === "login" ? <Loginbox /> : <SignupBox />}
      </div>
    </div>
  );
};

export default Registration;

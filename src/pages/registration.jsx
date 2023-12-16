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
    <div className="register_box">
      <div>
        <img src={assets.images.LOGIN.BANNER} alt="" />
      </div>
      <div className="register_container">
        <Text as="b" fontSize="3xl" m="3">
          Welcome to Alchemus
        </Text>
        <div className="login_signupToggle">
          <NavLink to="/login" onClick={() => console.log("Login page")}>Login</NavLink>
          <NavLink to="/registration" onClick={() => console.log("Register")}>Registration</NavLink>
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

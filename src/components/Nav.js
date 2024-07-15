import {
  Box,
  Image,
  Text,
  List,
  ListItem,
  UnorderedList,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import assets from "../assests";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SideDrawer from "./SideDrawer";
import countDown from "../hooks/countDown";

const NavBar = () => {
  
  const [getLogin, setGetLogin] = useState(false);

  useEffect(() => {
    let loginValue = localStorage.getItem("login");
    setGetLogin(loginValue);
  }, [getLogin]);

  if (getLogin != false && getLogin != null) {
    /* Start the timer with a duration of 30 minutes */
    countDown(1800);
  }

  return (
    <Box w={"100%"}>
      {getLogin == "true" ? (
        <Box
          className="c_logo"
          w={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w={"15%"} className="header_logo">
            <Link className="logo_wrapper" to="/">
              <Image src={assets.images.COMMON.APP_LOGO} alt="Alchemus Logo" />
            </Link>
          </Box>
          <Flex
            w={"85%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="header-navBar"
          >
            <Box
              className="header_nav"
              w={"82%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <UnorderedList
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                columnGap={"9px"}
              >
                <ListItem>
                  <NavLink to="/my-profile">
                    <Box>My Profile</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/search">
                    <Box>Search Jobs</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/referred-jobs">
                    <Box>Referred Jobs</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/savejob">
                    <Box>Saved Jobs</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/job-description">
                    <Box>Jobs Applied</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/repository">
                    <Box>Document Repository</Box>
                  </NavLink>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box
              className="nav_account"
              w={"15%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Menu>
                <MenuButton>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                  >
                    <Image
                      src={assets.images.PROFILE.PROFILE_IMG}
                      alt="profile png"
                      className="profile_img"
                    />
                    <Text>Vishal</Text>
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as="a"
                    href="/"
                    onClick={() => {
                      localStorage.removeItem("login");
                      localStorage.removeItem("token_Key");
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          <Box className="sideDrawer--NavBar">
            <SideDrawer />
          </Box>
        </Box>
      ) : (
        <Box
          className="c_logo"
          w={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w={"20%"} className="header_logo">
            <Link className="logo_wrapper" to="/">
              <Image src={assets.images.COMMON.APP_LOGO} alt="Alchemus Logo" />
            </Link>
          </Box>
          <Box
            className="header_nav"
            w={"60%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <UnorderedList
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              className="auth-links"
            >
              <ListItem>
                <Link to="/login">
                  <Box>Login</Box>
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;

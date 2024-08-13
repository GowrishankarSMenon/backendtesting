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
  IconButton,
  Badge,
  MenuDivider,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import assets from "../assests";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SideDrawer from "./SideDrawer";
import countDown from "../hooks/countDown";

const NavBar = () => {
  const [getLogin, setGetLogin] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 2, message: "Your application has been reviewed." },
    { id: 2, message: "Your application has been reviewed." },
    { id: 2, message: "Your application has been reviewed." },
    { id: 2, message: "Your application has been reviewed." },
    { id: 2, message: "Your application has been reviewed." },
    { id: 1, message: "New job posted!" },
    { id: 2, message: "Your application has been reviewed." },
    { id: 2, message: "Your application has been reviewed." },
  ]);

  useEffect(() => {
    let loginValue = localStorage.getItem("login");
    setGetLogin(loginValue=="true");
  }, [getLogin]);

  if (getLogin != false && getLogin != null) {
    /* Start the timer with a duration of 30 minutes */
    countDown(1800);
  }

  return (
    <Box w={"100%"}>
      {getLogin == true ? (
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
              w={"20%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={'20px'}
              ml={'20px'}
            >
              <Menu>
                <MenuButton as={Box} position="relative">
                  <IconButton icon={<BellIcon />} variant="ghost" />
                  {notifications.length > 0 && (
                    <Badge
                      colorScheme="red"
                      borderRadius="full"
                      position="absolute"
                      top="0"
                      right="0"
                      fontSize="0.8em"
                    >
                      {notifications.length}
                    </Badge>
                  )}
                </MenuButton>
                <MenuList
                  maxHeight="300px"
                  overflowY="scroll"
                  sx={{
                    '&::-webkit-scrollbar': {
                      width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#888',
                      borderRadius: '8px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      background: '#555',
                    },
                  }}
                >
                  <MenuItem className="text-base font-medium mb-2">
                    All Notifications
                  </MenuItem>
                  {notifications.map((notification) => (
                    <>
                      <MenuItem key={notification.id} className="text-sm font-medium">
                        {notification.message}
                      </MenuItem>
                      <MenuDivider />
                    </>
                  ))}
                  {notifications.length === 0 && (
                    <MenuItem>No new notifications</MenuItem>
                  )}
                </MenuList>
              </Menu>
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
                      setGetLogin(false)
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

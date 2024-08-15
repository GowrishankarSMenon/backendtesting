import React from "react";
import {
  Box,
  Flex,
  Text,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  List,
  ListItem,
  UnorderedList,
  Menu,
  Image,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import assets from "../assests";
import { Link, NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";


const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon fontSize="18px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box
              w={"100%"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Image
                w={'40px'}
                borderWidth={2}
                borderRadius={'50%'}
                src={assets.images.PROFILE.PROFILE_IMG}
                alt="profile png"
                className="profile_img"
              />
              <Text fontSize={'15px'} ml={'10px'}>Vishal</Text>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Flex justifyContent={'flex-end'} flexDirection={'column'} alignItems={'flex-start'}>
              <Box className="header_nav">
                <UnorderedList>
                  <ListItem mt={'10px'} mb={'15px'}>
                    <NavLink to="/my-profile">
                      <Box>My Profile</Box>
                    </NavLink>
                  </ListItem>
                  <ListItem mb={'15px'}>
                    <NavLink to="/search">
                      <Box>Search Jobs</Box>
                    </NavLink>
                  </ListItem>
                  <ListItem mb={'15px'}>
                    <NavLink to="/referred-jobs">
                      <Box>Referred Jobs</Box>
                    </NavLink>
                  </ListItem>
                  <ListItem mb={'15px'}>
                    <NavLink to="/savejob">
                      <Box>Saved Jobs</Box>
                    </NavLink>
                  </ListItem>
                  <ListItem mb={'15px'}>
                    <NavLink to="/job-description">
                      <Box>Jobs Applied</Box>
                    </NavLink>
                  </ListItem>
                  <ListItem mb={'15px'}>
                    <NavLink to="/repository">
                      <Box>Document Repository</Box>
                    </NavLink>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box className="login_Button--wrapper" mt={'20px'}>
                <Text
                  as="a"
                  fontSize={'15px'}
                  fontWeight={'600'}
                  href="/"
                  onClick={() => {
                    localStorage.removeItem("login");
                    //localStorage.removeItem("token_Key");
                    deleteCookie('token_Key');
                  }}
                >
                  Logout
                </Text>
              </Box>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;

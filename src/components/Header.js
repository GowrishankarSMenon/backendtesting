import React from "react";

/* Chakra UI */
import { Box, Flex, Divider } from "@chakra-ui/react";

import NavBar from "./Nav";

const Header = () => {
  let link;
  let url = window.location.href;
  let url_href = url.split("/");

  url_href.forEach((el, i) => {
    if (el === "Account" || el === "job-description") {
      link = el;
    }
  });

  let bg_Login = localStorage.getItem("login");

  let classes =
    bg_Login == "true"
      ? "main-header--layout nested-bg"
      : "main-header--layout main-bg";

  return (
    <Box className={classes}>
      <header className="header header_section header--bg header--layout">
        <Box className="">
          <NavBar />
        </Box>
      </header>
      {link == "Account" || link === "job-description" ? <Divider /> : null}
    </Box>
  );
};

export default Header;

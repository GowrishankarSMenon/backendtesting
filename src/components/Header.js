import React from "react";

/* Chakra UI */
import { Box } from "@chakra-ui/react";

import NavBar from "./Nav";

const Header = () => {

  let bg_Login = localStorage.getItem("login");

  let classes =
    bg_Login == "true"
      ? "main-header--layout nested-bg"
      : "main-header--layout main-bg";

  return (
    <Box className={classes}>
      <Box>
        <header className="header header_section header--bg header--layout header-responsive">
          <Box className="">
            <NavBar />
          </Box>
        </header>
      </Box>
    </Box>
  );
};

export default Header;

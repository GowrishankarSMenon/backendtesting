import React from "react";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import { atob } from "js-base64";

import categoryItems from "../json/categories.json";

const CategoryCard = () => {
  const categoryCard =
    categoryItems.length > 0
      ? categoryItems.map((item, i) => {
          return (
            <Box
              w={"100%"}
              h={"190px"}
              className="categoryCard_box"
              key={i + 1}
            >
              <Link className="categoryCard_link">
                <Box className="">
                  <Box className="icons_container">
                    <Box
                      className="icons_wrapper"
                      dangerouslySetInnerHTML={{
                        __html: atob(item.icon.image.data),
                      }}
                    />
                  </Box>
                  <Box className="subcategoryCard_wrapper">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="24px"
                      letterSpacing="0.01em"
                      textAlign="center"
                      color="#141414"
                      className="subText_title"
                    >
                      {item.title}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })
      : null;

  return (
    <Box className="product-category-container page-width">
      <Box className="categoryCard_container">
        <Box className="categoryCard_textWrapper">
          <Heading
            as={"h2"}
            className="categoryCard_Text"
            fontSize="24px"
            fontWeight="600"
            lineHeight="29px"
            textAlign="left"
          >
            Product Categories
          </Heading>
        </Box>
        <Box className="categoryCard_wrapper">
          <Box w={"100%"} className="categoryCard_grid">
            {categoryCard}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCard;

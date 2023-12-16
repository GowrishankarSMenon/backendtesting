import React from "react";
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Avatar,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import company from "../assests/icons/company.jpeg";
import date from "../assests/icons/date.jpeg";
import location from "../assests/icons/location.jpeg";

const CardGrid = ({ title, id }) => {
  return (
    <Card minW="350px" className="card-grid-container" key={id}>
      <CardHeader className="card-frid-wrapper">
        <Flex
          flex="1"
          gap="4"
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="space-between"
          className="card-header-flex"
        >
          <Flex spacing="4" className="">
            <Box className="card-header-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <rect width="64" height="64" rx="8" fill="#1A213C" />
                <path
                  d="M35.1811 37.8151C35.1811 38.5225 34.6403 39.0982 33.9725 39.0982H29.7265C29.0607 39.0982 28.5213 38.5217 28.5213 37.8151V33.4831H14.3284V45.1989C14.3284 47.2847 15.9187 48.9768 17.8821 48.9768H45.8204C47.7803 48.9768 49.3727 47.2847 49.3727 45.1989V33.4824H35.1811V37.8151Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M45.8203 24.5098H17.8821C15.9187 24.5098 14.3284 26.2032 14.3284 28.2883V31.9701H28.5213V31.0771C28.5213 30.3698 29.0607 29.7961 29.7265 29.7961H33.9725C34.6402 29.7961 35.1811 30.3698 35.1811 31.0771V31.9701H49.3727V28.2883C49.3727 26.2025 47.7802 24.5098 45.8203 24.5098Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M37.4501 22.9695C38.1702 22.9695 38.7565 22.346 38.7565 21.5786V19.9725C38.7565 17.9221 37.1879 16.2539 35.2605 16.2539H28.4399C26.5139 16.2539 24.9467 17.9221 24.9467 19.9725V21.5786C24.9467 22.3452 25.5323 22.9694 26.2517 22.9694C26.9724 22.9694 27.5595 22.3459 27.5595 21.5786V19.9725C27.5595 19.4545 27.9549 19.0332 28.4399 19.0332H35.2606C35.7484 19.0332 36.1451 19.4545 36.1451 19.9725V21.5786C36.1451 22.3453 36.7307 22.9695 37.4501 22.9695Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M29.9434 31.3062C29.9434 31.723 29.9434 37.1706 29.9434 37.5852C30.3116 37.5852 33.3944 37.5852 33.7593 37.5852C33.7593 37.1705 33.7593 31.723 33.7593 31.3062C33.3944 31.3062 30.3109 31.3062 29.9434 31.3062Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M35.1811 37.8151C35.1811 38.5225 34.6403 39.0982 33.9725 39.0982H29.7265C29.0607 39.0982 28.5213 38.5217 28.5213 37.8151V33.4831H14.3284V45.1989C14.3284 47.2847 15.9187 48.9768 17.8821 48.9768H45.8204C47.7803 48.9768 49.3727 47.2847 49.3727 45.1989V33.4824H35.1811V37.8151Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M45.8203 24.5098H17.8821C15.9187 24.5098 14.3284 26.2032 14.3284 28.2883V31.9701H28.5213V31.0771C28.5213 30.3698 29.0607 29.7961 29.7265 29.7961H33.9725C34.6402 29.7961 35.1811 30.3698 35.1811 31.0771V31.9701H49.3727V28.2883C49.3727 26.2025 47.7802 24.5098 45.8203 24.5098Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M37.4501 22.9695C38.1702 22.9695 38.7565 22.346 38.7565 21.5786V19.9725C38.7565 17.9221 37.1879 16.2539 35.2605 16.2539H28.4399C26.5139 16.2539 24.9467 17.9221 24.9467 19.9725V21.5786C24.9467 22.3452 25.5323 22.9694 26.2517 22.9694C26.9724 22.9694 27.5595 22.3459 27.5595 21.5786V19.9725C27.5595 19.4545 27.9549 19.0332 28.4399 19.0332H35.2606C35.7484 19.0332 36.1451 19.4545 36.1451 19.9725V21.5786C36.1451 22.3453 36.7307 22.9695 37.4501 22.9695Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M29.9434 31.3062C29.9434 31.723 29.9434 37.1706 29.9434 37.5852C30.3116 37.5852 33.3944 37.5852 33.7593 37.5852C33.7593 37.1705 33.7593 31.723 33.7593 31.3062C33.3944 31.3062 30.3109 31.3062 29.9434 31.3062Z"
                  fill="#FBFBFB"
                />
              </svg>
            </Box>
            <Box className="card-badge--wrapper">
              <Text
                fontSize="14px"
                fontWeight="600"
                lineHeight="17px"
                letterSpacing="0.75px"
                textAlign="center"
                className="card-badge--title"
              >
                Permanent
              </Text>
            </Box>
          </Flex>
          <Box className="card_Bookmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M7.44767 4.78105C6.94758 5.28115 6.66663 5.95942 6.66663 6.66667V28L16 23.3333L25.3333 28V6.66667C25.3333 5.95942 25.0523 5.28115 24.5522 4.78105C24.0521 4.28095 23.3739 4 22.6666 4H9.33329C8.62605 4 7.94777 4.28095 7.44767 4.78105Z"
                stroke="#141414"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody className="card_Body">
        <Box className="card-body-title--wrapper">
          <Box className="title--wrapper">
            <Heading
              as="h3"
              fontSize="20px"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="0.16px"
              textAlign="left"
              className="card-body-title"
            >
              {title}
            </Heading>
          </Box>
        </Box>
        <Flex
          className="card-address-flex"
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <Box
            w={"50%"}
            className=""
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Image src={company} alt="company icon" />
            <span className="">Mark Inc.</span>
          </Box>
          <Box
            w={"50%"}
            className=""
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Image src={location} alt="location icon" />
            <span className="">Mumbai, India</span>
          </Box>
          <Box
            w={"100%"}
            className=""
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Image src={date} alt="date icon" />
            <span className="">9th Dec 2023</span>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter justify="space-between" alignItems="center" gap="10px">
        <Button className="" flex="2" variant="ghost">
          Apply
        </Button>
        <Button w={"60px"} className="" variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1432 20.4886L20.9605 2.98574C21.1547 2.40104 20.6001 1.84477 20.0171 2.03968L2.50997 7.89247C1.86829 8.10698 1.81991 8.99858 2.43459 9.28167L8.26788 11.9681C8.51517 12.082 8.80467 12.0518 9.02325 11.8892L17.2135 5.79756L11.4518 14.3748C11.3095 14.5866 11.2848 14.8565 11.3863 15.0908L13.7517 20.5501C14.0242 21.1792 14.9269 21.1392 15.1432 20.4886Z"
              fill="#4160D8"
            />
          </svg>
        </Button>
        <Button w={"60px"} className="" variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1801 12.9427L11.3672 13.926C11.4404 13.9871 11.5313 14.0204 11.6249 14.0204C11.7185 14.0204 11.8094 13.9871 11.8826 13.926L13.0699 12.9427L20.9705 19.5H2.27952L10.1801 12.9427ZM21.75 19.0355V5.73986L13.7371 12.3875L21.75 19.0355ZM1.5 5.73986V19.0355L9.5129 12.3875L1.5 5.73986ZM11.625 13.0303L21.0018 5.25H2.24794L11.625 13.0303Z"
              fill="#4160D8"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardGrid;

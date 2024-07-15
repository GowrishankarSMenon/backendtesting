import React from 'react';
import {Box, Heading } from "@chakra-ui/react"

const BannerTitle = () => {
  return (
    <Box className='text-main-heading text--wrapper'>
      <Heading as={"h1"} textAlign={'left'} fontSize={'48px'} fontWeight={'600'} lineHeight={"58px"} fontFamily={'Inter'} >
        Get your dream job with Alchemus
      </Heading>
      <Heading as={"p"} textAlign={'left'} fontSize={'16px'} fontWeight={'400'} lineHeight={"24px"} fontFamily={'Inter'} mt={1} >
      Lorem ipsum dolor sit amet consectetur. Augue rhoncus at ultrices tempus risus. Eu odio suscipit enim ipsum ut non elementum. Phasellus lectus sodales sociis tellus dignissim. Est proin id inconsequat sapien ultrices ac ut purus.
      </Heading>
    </Box>
  )
}

export default BannerTitle

import React from 'react';
import {Box, Heading } from "@chakra-ui/react"

const BannerTitle = () => {
  return (
    <Box className='text-main-heading text--wrapper'>
      <Heading as={"h1"} textAlign={'left'} fontSize={'48px'} fontWeight={'600'} lineHeight={"58px"} fontFamily={'Inter'} >
        Get your dream job with Alchemus
      </Heading>
    </Box>
  )
}

export default BannerTitle

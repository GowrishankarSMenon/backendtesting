import { Box, Image } from "@chakra-ui/react";
import assets from '../assests'
const NavBar = () => {

  return (
    <Box w='80%' m='auto' my='1em'>
      <Image src={assets.images.COMMON.APP_LOGO} alt='Alchemus Logo' />
    </Box>
  )
}

export default NavBar;
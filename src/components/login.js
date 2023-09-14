import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Box,
  Button
} from '@chakra-ui/react'
import PasswordInput from '../helper/PasswordInput';
import { Link } from '@chakra-ui/react'
import FormController from '../helper/FormController';

const Loginbox = () => {
  return (
    <>
      <FormController lable='Login Id' placeholder='Enter your Login Id' />

      <FormControl isRequired my='1em'>
        <FormLabel>Enter your Password</FormLabel>
        <PasswordInput />
      </FormControl>

      <Box className='checkBox_box' >
        <Checkbox size='sm' colorScheme='blue'>
          Remember credentials
        </Checkbox>
        <Link color='red.400' fontSize='sm'>Forget Password</Link>
      </Box>
      <Box className='login_submit'>
        <Button colorScheme='blue' bg='#4160D8' size='md' my='1em' w='30%'>Log In</Button>
      </Box>
    </>
  )
}

export default Loginbox;
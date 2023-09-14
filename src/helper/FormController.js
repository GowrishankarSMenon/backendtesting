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
import PasswordInput from './PasswordInput'

const FormController = ({ lable, placeholder }) => {
  console.log(placeholder, 'ff');
  return (
    <>
      <FormControl isRequired my='1em'>
        <FormLabel>{lable}</FormLabel>
        <Input placeholder={placeholder} />
      </FormControl>

    </>
  )
}

export default FormController;
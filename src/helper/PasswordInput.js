import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,

} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button bg='transparent' size='sm' onClick={handleClick}>
          {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput;
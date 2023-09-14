import { useEffect, useState } from 'react';
import assets from '../assests'
import {
  Text,
  Button
} from '@chakra-ui/react';
import Loginbox from '../components/login';
import SignupBox from '../components/Signup';
import '../assests/styles.css'

const Registration = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log(status, 'fffdsc');
  }, [status])

  return (
    <div className="register_box">
      <div>
        <img src={assets.images.LOGIN.BANNER} alt="" />
      </div>
      <div className='register_container'>
        <Text as='b' fontSize='3xl' m='3'>Welcome to Alchemus</Text>
        <div className='login_signupToggle'>
          <Button
            color={status ? 'white' : 'blackAlpha'}
            colorScheme={status ? 'blue' : ''}
            bg={status ? '#4160D8' : ''}
            borderRadius='5em'
            w='48%'
            variant='solid'
            onClick={() => { setStatus(true) }}
          >
            Login
          </Button>

          <Button
            colorScheme={status ? '' : 'blue'}
            bg={status ? '' : '#4160D8'}
            color={status ? 'black' : 'white'}
            borderRadius='5em'
            w='45%'
            variant='solid'
            onClick={() => { setStatus(false) }}
          >
            Signup
          </Button>
        </div>
        {/* <Loginbox /> */}

        {
          status ? <Loginbox /> : <SignupBox />
        }
      </div>
    </div>
  )
}

export default Registration;
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Box,
  Button,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";

const FormController = ({
  label,
  placeholder,
  handleChange,
  value,
  name,
  id,
  Required,
  undertext,
  error
}) => {

  return (
    <>
      <FormControl isRequired={Required} my="1em">
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name}
          id={id}
        />
        {undertext && <p className="text-gray-500 text-sm p-1">{undertext}</p>}
      </FormControl>
    </>
  );
};

export default FormController;

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
  error
}) => {

  return (
    <>
      <FormControl isRequired={Required} my="1em">
        <FormLabel>{label}</FormLabel>
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name}
          id={id}
        />
      </FormControl>
    </>
  );
};

export default FormController;

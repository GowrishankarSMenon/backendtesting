import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PopUpForms = ({ fields, onSave, onCancel }) => {
  const [loading, setLoading] = useState(false);

  // Define the initial values and validation schema based on the number of fields
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const validationSchema = fields.reduce((acc, field) => {
    acc[field.name] = Yup.string().required(`${field.label} is required`);
    return acc;
  }, {});

  const handleSubmit = (values) => {
    setLoading(true);
    onSave(values);  // Trigger the onSave callback with form values
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <Box>
            {fields.map((field, index) => (
              <FormControl key={index} my="1em" isInvalid={!!ErrorMessage.name}>
                <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                <Field
                  as={Input}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder || `Enter ${field.label}`}
                />
                <ErrorMessage
                  name={field.name}
                  component={FormErrorMessage}
                />
              </FormControl>
            ))}

            <HStack spacing={4} my="1em">
              <Button type="submit" colorScheme="blue" isLoading={loading}>
                {loading ? <Spinner size="sm" /> : "Save"}
              </Button>
              <Button
                type="button"
                colorScheme="gray"
                onClick={() => handleClear(resetForm)}
              >
                Clear
              </Button>
              <Button
                type="button"
                colorScheme="red"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </HStack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PopUpForms;

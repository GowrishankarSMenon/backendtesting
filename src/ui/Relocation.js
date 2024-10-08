import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Example data for countries and states
const countryStateData = {
  USA: ["California", "Texas", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  India: ["Maharashtra", "Karnataka", "Tamil Nadu"],
  // Add more countries and states as needed
};

const Relocation = ({ onSave, onCancel }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    candidateId: "",
    country: "",
    state: "",
    countryName: "",
    stateName: "",
    cityName: "",
    priority: "",
    willingToRelocate: "",
  };

  const validationSchema = Yup.object({
    candidateId: Yup.string().required("Candidate ID is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    countryName: Yup.string().required("Country name is required"),
    stateName: Yup.string().required("State name is required"),
    cityName: Yup.string().required("City name is required"),
    priority: Yup.string().required("Priority is required"),
    willingToRelocate: Yup.string().required("Willingness to relocate is required"),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    onSave(values);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm, values }) => (
        <Form>
          <Box>
            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="candidateId">Candidate ID</FormLabel>
              <Field
                as={Input}
                id="candidateId"
                name="candidateId"
                placeholder="Enter Candidate ID"
              />
              <ErrorMessage name="candidateId" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Field
                as={Select}
                id="country"
                name="country"
                placeholder="Select Country"
                onChange={handleCountryChange}
              >
                {Object.keys(countryStateData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="country" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="state">State</FormLabel>
              <Field
                as={Select}
                id="state"
                name="state"
                placeholder="Select State"
                isDisabled={!selectedCountry}
              >
                {selectedCountry &&
                  countryStateData[selectedCountry].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="state" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="countryName">Country Name</FormLabel>
              <Field
                as={Input}
                id="countryName"
                name="countryName"
                placeholder="Enter Country Name"
              />
              <ErrorMessage name="countryName" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="stateName">State Name</FormLabel>
              <Field
                as={Input}
                id="stateName"
                name="stateName"
                placeholder="Enter State Name"
              />
              <ErrorMessage name="stateName" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="cityName">City Name</FormLabel>
              <Field
                as={Input}
                id="cityName"
                name="cityName"
                placeholder="Enter City Name"
              />
              <ErrorMessage name="cityName" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="priority">Priority</FormLabel>
              <Field
                as={Input}
                id="priority"
                name="priority"
                placeholder="Enter Priority"
              />
              <ErrorMessage name="priority" component={FormErrorMessage} />
            </FormControl>

            <FormControl my="1em" isInvalid={!!ErrorMessage.name}>
              <FormLabel htmlFor="willingToRelocate">Willing to Relocate</FormLabel>
              <Field
                as={Select}
                id="willingToRelocate"
                name="willingToRelocate"
                placeholder="Select Option"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage
                name="willingToRelocate"
                component={FormErrorMessage}
              />
            </FormControl>

            <HStack spacing={4} my="1em">
              <Button type="submit" colorScheme="blue" isLoading={loading}>
                {loading ? <Spinner size="sm" /> : "Save"}
              </Button>
              <Button
                type="button"
                colorScheme="gray"
                onClick={() => resetForm()}
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

export default Relocation;

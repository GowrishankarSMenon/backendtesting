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
let dumy=[
  {
      "CJD_Month": "February",
      "CJD_Year": "2020",
      "CLD_Month": "January",
      "CLD_Year": "2024",
      "Candidate_Experience_ID": 4273,
      "Candidate_Id": 2170,
      "Candidates_Role": "test",
      "Company_Joining_Date": "02/01/2020",
      "Company_Last_Working_Date": "01/01/2024",
      "Contact_Address1": "",
      "Contact_Address2": "",
      "Contact_City": "",
      "Contact_Country": "AF",
      "Contact_Country_Name": "Afghanistan",
      "Contact_CurrentEmployer": "Yes",
      "Contact_Email": "test@gmail.com",
      "Contact_Position_Type": 1,
      "Contact_State": "GHO",
      "Contact_State_Name": "Ghowr",
      "Contact_Telephone_No": "4534535",
      "Contact_Type": "Recruiter",
      "Contact_Zip_Code": "34535",
      "Functional_Description": "test",
      "Industry_ID": "Engineering",
      "Org_Address1": "",
      "Org_Address2": "",
      "Org_City": "",
      "Org_Country": "US",
      "Org_Country_Name": "USA",
      "Org_Size": "",
      "Org_State": "CA",
      "Org_State_Name": "California",
      "Org_Telephone_No": "",
      "Org_URL": "",
      "Org_Zip_Code": "",
      "Person_Name": "test",
      "Position_Title": "test",
      "Till_Date": null,
      "Worked_For_Company": "test"
  }
]

  // Define the initial values and validation schema based on the number of fields
  const initialValues = dumy.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const validationSchema = fields?.reduce((acc, field) => {
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
            {fields?.map((field, index) => (
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

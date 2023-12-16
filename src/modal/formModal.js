import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Checkbox,
  Radio,
  FormLabel,
  RadioGroup,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";

// components
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const initialValues = {
  profile_name: "",
  position: "",
  link: "",
  date: "",
  note: "",
};
const initialSelectValues = {
  profile_name: "",
  position: "",
  link: "",
  date: "",
  note: "",
};
const initialRadioValues = {
  profile_name: "",
  position: "",
  link: "",
  date: "",
  note: "",
};
const initialCheckValues = {
  profile_name: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

const FormModal = () => {
  const [input, setInput] = useState(initialValues);
  const [select, setSelect] = useState(initialSelectValues);
  const [radio, setRadio] = useState(initialRadioValues);
  const [checked, setChecked] = useState(initialCheckValues);

  const onHandleChange = (e) => {
    // setInput(e.target.value);
    console.log(e);
  };
  const onHandleSelectChange = (e) => {
    // setInput(e.target.value);
    console.log(e);
  };
  const onHandleRadioChange = (e) => {
    // setInput(e.target.value);
    console.log(e);
  };
  const onHandleCheckChange = (e) => {
    // setInput(e.target.value);
    console.log(e);
  };
  console.log("====================================");
  console.log(input);
  console.log("====================================");
  return (
    <Box>
      <Box>
        <Box>
          <Text as={"span"} color="red" fontSize={"12px"}>
            * Indicates Mandatory Fields
          </Text>
        </Box>
        <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
          Personal Info (Optional)
        </Heading>
        <Box fontSize={"14px"} mb={4}>
          <Text as={"span"}>Last Modified Date: </Text>
          <Text as={"span"}>4/6/2022 5:02:36 AM</Text>
        </Box>
      </Box>
      <TextInputField
        type="text"
        name="profile_name"
        id="profile"
        value={input}
        label="Profile Name"
        placeholder="Profile Name"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="salutation"
        id="salute"
        value={input}
        label="Salutation"
        placeholder="Salutation"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="first_name"
        id="firstName"
        value={input}
        label="First Name"
        placeholder="First Name"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="last_name"
        id="lastName"
        value={input}
        label="Last Name"
        placeholder="Last Name"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="middle_name"
        id="middleName"
        value={input}
        label="Middle Name/Initial"
        placeholder="Middle Name/Initial"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="know_as"
        id="knowAs"
        value={input}
        label="Know as"
        placeholder="Know as"
        Required={false}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="email"
        name="email"
        id="e-mail"
        value={input}
        label="Email"
        placeholder="Email address"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="mother_name"
        id="motherName"
        value={input}
        label="Mother's Name"
        placeholder="Mother's Name"
        Required={false}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
      />
      <SelectInputField
        name="state"
        id="state"
        value={input}
        label="State/Proviance"
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="State"
      />
      <TextInputField
        type="text"
        name="city"
        id="city"
        value={input}
        label="City"
        placeholder="City"
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextAreaField
        label="Address"
        name="address"
        id="address"
        value={input}
        placeholder="Address..."
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="zipcode"
        id="zip_code"
        value={input}
        label="Zip/Postal Code"
        placeholder="Zip/Postal Code"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <SelectInputField
        label="Gender"
        name="gender"
        id="gender"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <SelectInputField
        label="Marital Status"
        name="marital"
        id="marital_status"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <TextInputField
        type="text"
        name="birthPlace"
        id="birth_place"
        value={input}
        label="Birth Place"
        placeholder="Birth Place"
        Required={false}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="birthDate"
        id="birth_date"
        value={input}
        label="Birth Date"
        placeholder="Birth Date"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <SelectInputField
        label=" Nationality"
        name="nationality"
        id="national"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <SelectInputField
        label="Residency Country"
        name="residencyCountry"
        id="residency_country"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <SelectInputField
        name="citizenshipCountry"
        id="citizenship_country"
        value={input}
        label="Citizenship Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <TextInputField
        type="number"
        name="identificationNumber"
        id="identification_number"
        value={input}
        label="Legal Identification Number"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <Box>
        <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
          Contact Details
        </Heading>
      </Box>
      <SelectInputField
        name="contactPreference"
        id="contact_preference"
        value={input}
        label="Contact Preference"
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Select from list"
      />
      <TextInputField
        type="tel"
        name="phone"
        id="phone"
        value={input}
        label="Phone #"
        placeholder="22556567"
        Required={false}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="tel"
        name="mobile"
        id="mobile"
        value={input}
        label="Mobile #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="alt_phone"
        id="alternatNumber"
        value={input}
        label="Alt.Phone #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="businessNumber"
        id="business_phone"
        value={input}
        label="Business Phone #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="pager"
        id="pager"
        value={input}
        label="Pager #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="extension"
        id="ext"
        value={input}
        label="Ext #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="faxNum"
        id="fax_num"
        value={input}
        label="Fax #"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="website"
        id="web_site"
        value={input}
        label="Web Site"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <CheckedField
        checkText={"Permanent Contact Details Same As Above"}
        id=""
        value=""
        name=""
      />
      <SelectInputField
        name="career"
        id="career_level"
        value={input}
        label="Career Level"
        placeholder="Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
      />
      <SelectInputField
        name="experience"
        id="total_experience"
        value={input}
        label="Total Experience"
        handleSelectChange={(e) => onHandleSelectChange(e)}
        placeholder="Country"
      />
      <TextInputField
        type="text"
        name="position"
        id="current_position"
        value={input}
        label="Current Position Title"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <TextInputField
        type="text"
        name="salary"
        id="current_salary"
        value={input}
        label="Current Salary/Rate"
        placeholder="0.00"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <SelectInputField
        name=""
        id=""
        value={input}
        label=""
        placeholder="Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
      />
      <SelectInputField
        name=""
        id=""
        value={input}
        label=""
        placeholder="Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
      />
      <SelectInputField
        name="authorize_work"
        id="to_work"
        value={input}
        label="Authorization To Work"
        placeholder="Country"
        handleSelectChange={(e) => onHandleSelectChange(e)}
      />
      <RadioInputField
        name="willingRelocate"
        id="willing_relocate"
        value={radio}
        handleRadioChange={(e) => onHandleRadioChange(e)}
      />
      <CheckedField
        checkText={"Immediate Start Indicator"}
        value=""
        name=""
        id=""
      />
      <TextInputField
        type="text"
        name="legalIdentificationNumber"
        id="legal_identification_number"
        value={input}
        label="Legal Identification Number"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <Box>
        <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
          Preferences
        </Heading>
      </Box>
      <TextInputField
        type="text"
        name="currentSalary"
        id="current_rate"
        value={input}
        label="Current Salary/Rate"
        placeholder="0.00"
        Required={true}
        handleInputChange={(e) => onHandleChange(e)}
      />
      <SelectInputField
        name=""
        id=""
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        label=""
        placeholder="Select From List"
      />
      <SelectInputField
        name=""
        id=""
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        label=""
        placeholder="Select From List"
      />
      <SelectInputField
        name="desiredSalary"
        id="desired_salary"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        label="Desired Salary"
        placeholder="<10000"
      />
      <SelectInputField
        name="desiredJob"
        id="desired_job"
        value={input}
        handleSelectChange={(e) => onHandleSelectChange(e)}
        label="Desired Job Term"
        placeholder="All of the above"
      />
      <RadioInputField
        name="willingRelocate"
        id="willing_relocate"
        value={radio}
        handleRadioChange={(e) => onHandleRadioChange(e)}
        label="Willing to Relocate"
      />
      <TextAreaField
        name="relocateComment"
        id="relocate_comment"
        value={input}
        handleInputChange={(e) => onHandleChange(e)}
        label="Relocation Comments"
        placeholder="Comments..."
      />
      <Text fontSize={"12px"} mt={-1}>
        (Maximum limit is 1000 characters)
      </Text>
      <Divider orientation="horizontal" mt={4} mb={4} />
      <Box>
        <Flex justifyContent={"flex-start"} alignItems={"center"} gap={4}>
          <Box>
            <Button fontSize={"14px"} color="white" colorScheme="blue">
              Save
            </Button>
          </Box>
          <Box>
            <Button fontSize={"14px"} color="white" colorScheme="red">
              Clear
            </Button>
          </Box>
          <Box>
            <Button fontSize={"14px"} color="white" colorScheme="blackAlpha">
              Back
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FormModal;

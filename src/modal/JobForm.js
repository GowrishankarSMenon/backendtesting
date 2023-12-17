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
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const JobForm = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Box>
      <Box>
        <Box>
          <Text as={"span"} color="red" fontSize={"12px"}>
            * Indicates Mandatory Fields
          </Text>
        </Box>
        <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
          Job Preferences (Optional)
        </Heading>
      </Box>
      <TextInputField
        name="txtDesiredPosition_Title"
        type="text"
        id="txtDesiredPosition_Title"
        value={input}
        label="Desired Position Title"
        placeholder="Desired Position Title"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        name="txtAltPosition_Title"
        type="text"
        id="txtAltPosition_Title"
        placeholder="Alternate Position Title"
        value={input}
        label="Alternate Position Title"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="CboAvailibility"
        id="CboAvailibility"
        value={input}
        label="Availability"
        placeholder="Availability"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="TxtAvailableDate"
        id="TxtAvailableDate"
        placeholder="Date Available"
        value={input}
        label="Date Available"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="TxtTermOfNotice_Value"
        id="TxtTermOfNotice_Value"
        value={input}
        label="Term of Notice"
        placeholder="Term of Notice"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="CboTermOfNotice_Interval"
        id="CboTermOfNotice_Interval"
        value={input}
        label="Notice Interval"
        placeholder="Notice Interval"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="CboCareerLevel"
        id="CboCareerLevel"
        value={input}
        label="Desired Career Level"
        placeholder="Desired Career Level"
        Required={true}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="current_rate"
        id="current_rate"
        value={input}
        label="Current Salary/Rate"
        placeholder="0.00"
        Required={true}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="desiredWage_currency_code"
        id="desiredWage_currency_code"
        label=""
        value={input}
        placeholder="Select from list"
        Required={false}
        option={[
          { value: "0", title: "Select From List" },
          { value: "AED", title: "AE - Dirhams" },
          {
            value: "XAF",
            title: "CM - Communauté Financière Africaine Francs (BEAC)",
          },
          { value: "GBP", title: "GB - Pounds" },
          { value: "HKD", title: "HK - Dollars" },
          { value: "INR", title: "IN - Rupees" },
          { value: "OMR", title: "OM - Rials" },
          { value: "QAR", title: "QA - Rials" },
          { value: "USD", title: "US - United States Dollars" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="desiredWage_Type"
        id="desiredWage_Type"
        label=""
        value={input}
        placeholder="Select from list"
        Required={false}
        option={[
          { value: "0", title: "Select From List" },
          { value: "1", title: "Hour" },
          { value: "2", title: "Day" },
          { value: "3", title: "Week" },
          { value: "4", title: "BiWeek" },
          { value: "5", title: "Month" },
          { value: "6", title: "Year" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextAreaField
        name="relocateComment"
        id="relocateComment"
        value={input.relocateComment}
        handleInputChange={(e) => handleInputChange(e)}
        label="Relocation Comments"
        placeholder="Comments..."
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <RadioInputField
        name="willing_relocate"
        id="willing_relocate"
        value={input.willing_relocate}
        handleInputChange={(e) => handleInputChange(e)}
        label="Willing to Relocate"
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="legal_identification_number"
        id="legal_identification_number"
        value={input.legal_identification_number}
        label="Legal Identification Number"
        placeholder="22556567"
        Required={true}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <RadioInputField
        name="willing_relocate"
        id="willing_relocate"
        value={input.willing_relocate}
        handleInputChange={(e) => handleInputChange(e)}
        label="Willing to Relocate"
      />
      <TextAreaField
        name="relocateComment"
        id="relocateComment"
        value={input.relocateComment}
        handleInputChange={(e) => handleInputChange(e)}
        label="Relocation Comments"
        placeholder="Comments..."
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label="Country"
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="profile_name"
        id="profile_name"
        value={input}
        label="Profile Name"
        placeholder="Profile Name"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label=""
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextInputField
        type="text"
        name="profile_name"
        id="profile_name"
        value={input}
        label="Profile Name"
        placeholder="Profile Name"
        Required={false}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <SelectInputField
        name="country"
        id="country"
        value={input}
        label=""
        placeholder="Country"
        Required={false}
        option={[
          { value: "", title: "Select From List" },
          { value: "CM", title: "Cameroon" },
          { value: "HK", title: "Hong Kong" },
          { value: "IN", title: "India " },
          { value: "OM", title: "Oman" },
          { value: "QA", title: "Qatar" },
          { value: "AE", title: "UAE" },
          { value: "GB", title: "UK" },
          { value: "US", title: "USA" },
        ]}
        handleInputChange={(e) => handleInputChange(e)}
      />
      <TextAreaField
        name="relocateComment"
        id="relocateComment"
        value={input.relocateComment}
        handleInputChange={(e) => handleInputChange(e)}
        label="Relocation Comments"
        placeholder="Comments..."
      />
      <TextAreaField
        name="relocateComment"
        id="relocateComment"
        value={input.relocateComment}
        handleInputChange={(e) => handleInputChange(e)}
        label="Relocation Comments"
        placeholder="Comments..."
      />
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

export default JobForm;

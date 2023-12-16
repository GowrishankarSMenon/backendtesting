import React from "react";
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
  Divider
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const FormModal = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Text as={"span"}></Text>
        </Box>
        <Heading as={"h3"}></Heading>
        <Box>
          <Text as={"span"}></Text>
        </Box>
      </Box>
      <TextInputField
        type="text"
        label="Profile Name"
        placeholder="Profile Name"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Salutation"
        placeholder="Salutation"
        Required={true}
      />
      <TextInputField
        type="text"
        label="First Name"
        placeholder="First Name"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Last Name"
        placeholder="Last Name"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Middle Name/Initial"
        placeholder="Middle Name/Initial"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Know as"
        placeholder="Know as"
        Required={false}
      />
      <TextInputField
        type="email"
        label="Email"
        placeholder="Email address"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Mother's Name"
        placeholder="Mother's Name"
        Required={false}
      />
      <SelectInputField label="Country" placeholder="Country" />
      <SelectInputField label="State/Proviance" placeholder="State" />
      <TextInputField type="text" label="City" placeholder="City" />
      <TextAreaField label="Address" placeholder="Address..." />
      <TextInputField
        type="text"
        label="Zip/Postal Code"
        placeholder="Zip/Postal Code"
        Required={true}
      />
      <SelectInputField label="Gender" placeholder="Select from list" />
      <SelectInputField label="Marital Status" placeholder="Select from list" />
      <TextInputField
        type="text"
        label="Birth Place"
        placeholder="Birth Place"
        Required={false}
      />
      <TextInputField
        type="text"
        label="Birth Date"
        placeholder="Birth Date"
        Required={true}
      />
      <SelectInputField label=" Nationality" placeholder="Select from list" />
      <SelectInputField
        label="Residency Country"
        placeholder="Select from list"
      />
      <SelectInputField
        label="Citizenship Country"
        placeholder="Select from list"
      />
      <TextInputField
        type="text"
        label="Legal Identification Number"
        placeholder="22556567"
        Required={true}
      />
      <Box>
        <Heading as={"h3"}>Contact Details</Heading>
      </Box>
      <SelectInputField
        label="Contact Preference"
        placeholder="Select from list"
      />
      <TextInputField
        type="tel"
        label="Phone #"
        placeholder="22556567"
        Required={false}
      />
      <TextInputField
        type="tel"
        label="Mobile #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Alt.Phone #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Business Phone #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Pager #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Ext #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Fax #"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Web Site"
        placeholder="22556567"
        Required={true}
      />
      <CheckedField/>
      <SelectInputField label="Career Level" placeholder="Country" />
      <SelectInputField label="Total Experience" placeholder="Country" />
      <TextInputField
        type="text"
        label="Current Position Title"
        placeholder="22556567"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Current Salary/Rate"
        placeholder="0.00"
        Required={true}
      />
      <SelectInputField label="" placeholder="Country" />
      <SelectInputField label="" placeholder="Country" />
      <SelectInputField label="Authorization To Work" placeholder="Country" />
      <RadioInputField/>
      <Box>
        <Checkbox colorScheme="red" defaultChecked>
          Immediate Start Indicator
        </Checkbox>
      </Box>
      <TextInputField
        type="text"
        label="Legal Identification Number"
        placeholder="22556567"
        Required={true}
      />
      <Box>
        <Heading as={"h3"}>Preferences</Heading>
      </Box>
      <TextInputField
        type="text"
        label="Current Salary/Rate"
        placeholder="0.00"
        Required={true}
      />
      <SelectInputField label="" placeholder="Select From List" />
      <SelectInputField label="" placeholder="Select From List" />
      <SelectInputField label="Desired Salary" placeholder="<10000" />
      <SelectInputField label="Desired Job Term" placeholder="All of the above" />
      <RadioInputField label='Willing to Relocate'/>
      <TextAreaField label="Relocation Comments" placeholder="Comments..." />
      <Text>(Maximum limit is 1000 characters)</Text>
      <Divider orientation='horizontal' mt={4} mb={4}/>
      <Box>
        <Flex>
          <Box>
            <Button>Save</Button>
          </Box>
          <Box>
            <Button>Clear</Button>
          </Box>
          <Box>
            <Button>Back</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FormModal;

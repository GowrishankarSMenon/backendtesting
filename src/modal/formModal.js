import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { Box, Button, Flex, Text, Heading, Divider } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
//import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, State, City } from "country-state-city";

// components
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const initialValues = {
  profile_name: "",
  salutation: "",
  first_name: "",
  last_name: "",
  middle_name: "",
  know_as: "",
  email: "",
  mother_name: "",
  country: "",
  state: "",
  city: "",
  address: "",
  zip_code: "",
  gender: "",
  marital_status: "",
  birth_place: "",
  birth_date: "",
  nationality: "",
  residency_country: "",
  citizenship_country: "",
  identification_number: "",
  CboEthicinity: "",
  contact_preference: "",
  phone: "",
  mobile: "",
  alt_phone: "",
  business_phone: "",
  pager: "",
  extension: "",
  fax_num: "",
  website: "",
  career_level: "",
  total_experience: "",
  current_position: "",
  current_salary: "",
  salary_Currency_Code: "",
  salaryMode: "",
  authorize_work: "",
  willingRelocate: "",
  legal_identification_number: "",
  current_rate: "",
  desiredWage_currency_code: "",
  desiredWage_Type: "",
  desiredSalary: "",
  desired_job: "",
  willing_relocate: "",
  relocateComment: "",
  chkImmediate: false,
  chkPermanent: false,
};

const FormModal = ({editForm}) => {
  // console.log("Country", Country.getAllCountries());
  // console.log("State", State.getStatesOfCountry("IN"));
  const [input, setInput] = useState(initialValues);

  const onHandleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // initialValues.willingRelocate = radio;

  let stateCode = State.getStatesOfCountry(input.country);

  let option_Item = [];

  if (stateCode.length > 0) {
    for (let i = 0; i < stateCode.length; i++) {
      option_Item.push({
        value: stateCode[i].isoCode,
        title: stateCode[i].name,
      });
    }
  } else {
    option_Item.push({ value: "", title: "" });
  }

  console.log("Input", input);

  const onHandleCheckChange = (e) => {
    // setInput(e.target.value);
    console.log(e);
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  // }

  const onSubmit = (values) => {
    // if (values.userId !== "" && values.password !== "") {
    //   console.log("sign in");
    //   console.log("Formik Values", values);
    //   localStorage.setItem("login", true);
    //   navigate("/");
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 100);
    //   // loginApi(values);
    // } else {
    //   console.log("sign up");
    //   console.log("Formik Values", values);
    // }
  };

  const validate = (values) => {
    let errors = {};
    // if (!values.userId) {
    //   errors.userId = "Required";
    // }
    // if (!values.password) {
    //   errors.password = "Required";
    // }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log("====================================");
  // console.log(input);
  // console.log("====================================");
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
      <form onSubmit={formik.handleSubmit}>
        <TextInputField
          type="text"
          name="profile_name"
          id="profile_name"
          value={input.profile_name}
          label="Profile Name"
          placeholder="Profile Name"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          type="text"
          name="salutation"
          id="salutation"
          value={input.salutation}
          label="Salutation"
          placeholder="Select From List"
          Required={false}
          option={[
            { value: "", title: "Select From List" },
            { value: "dr", title: "Dr." },
            { value: "miss", title: "Miss" },
            { value: "mr", title: "Mr." },
            { value: "mrs", title: "Mrs." },
            { value: "ms", title: "Ms." },
            { value: "prof", title: "Prof." },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="first_name"
          id="first_name"
          value={input.first_name}
          label="First Name"
          placeholder="First Name"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="last_name"
          id="last_name"
          value={input.last_name}
          label="Last Name"
          placeholder="Last Name"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="middle_name"
          id="middle_name"
          value={input.middle_name}
          label="Middle Name/Initial"
          placeholder="Middle Name/Initial"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="know_as"
          id="know_as"
          value={input.know_as}
          label="Know as"
          placeholder="Know as"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="email"
          name="email"
          id="email"
          value={input.email}
          label="Email"
          placeholder="Email address"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="mother_name"
          id="mother_name"
          value={input.mother_name}
          label="Mother's Name"
          placeholder="Mother's Name"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="country"
          id="country"
          value={input.country}
          label="Country"
          placeholder="Select Country"
          Required={true}
          option={[
            { value: "CM", title: "Cameroon" },
            { value: "HK", title: "Hong Kong" },
            { value: "IN", title: "India " },
            { value: "OM", title: "Oman" },
            { value: "QA", title: "Qatar" },
            { value: "AE", title: "UAE" },
            { value: "GB", title: "UK" },
            { value: "US", title: "USA" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="state"
          id="state"
          value={input.state}
          label="State/Proviance"
          placeholder="Select State"
          Required={true}
          option={option_Item}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="city"
          id="city"
          value={input.city}
          label="City"
          placeholder="City"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextAreaField
          label="Address"
          name="address"
          id="address"
          value={input.address}
          placeholder="Address..."
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="zip_code"
          id="zip_code"
          value={input.zip_code}
          label="Zip/Postal Code"
          placeholder="Zip/Postal Code"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          label="Gender"
          name="gender"
          id="gender"
          value={input.gender}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "identify", title: "Decline to Identify" },
            { value: "male", title: "Male" },
            { value: "female", title: "Female" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          label="Marital Status"
          name="marital_status"
          id="marital_status"
          value={input.marital_status}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: 0, title: "Select From List" },
            { value: 1, title: "Domestic Partner" },
            { value: 2, title: "Divorced" },
            { value: 3, title: "Married" },
            { value: 4, title: "Unreported" },
            { value: 5, title: "Separated" },
            { value: 6, title: "Unmarried" },
            { value: 7, title: "Widowed" },
            { value: 8, title: "Legally Separated " },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="birth_place"
          id="birth_place"
          value={input.birth_place}
          label="Birth Place"
          placeholder="Birth Place"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="birth_date"
          id="birth_date"
          value={input.birth_date}
          label="Birth Date"
          placeholder="Birth Date"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          label=" Nationality"
          name="nationality"
          id="nationality"
          value={input.nationality}
          placeholder="Select Nationality"
          Required={false}
          option={[
            { value: "AF", title: "Afghani" },
            { value: "AL", title: "Albania" },
            { value: "DZ", title: "Algeria" },
            { value: "US", title: "American" },
            { value: "AD", title: "Andorian" },
            { value: "AO", title: "Angolian" },
            { value: "AI", title: "Anguillan" },
            { value: "AQ", title: "Antarctic" },
            { value: "AG", title: "Antigua and Barbuda" },
            { value: "AR", title: "Argentine" },
            { value: "AM", title: "Armenian" },
            { value: "AW", title: "Arubian" },
            { value: "AU", title: "Australian" },
            { value: "AS", title: "Austrian" },
            { value: "BS", title: "Bahameese" },
            { value: "BH", title: "Bahrainian" },
            { value: "BD", title: "Bangladeshi" },
            { value: "BA", title: "Bangladeshi" },
            { value: "BB", title: "Barbadian" },
            { value: "BY", title: "Belarusian" },
            { value: "BE", title: "Belgian" },
            { value: "BZ", title: "Belizean" },
            { value: "BJ", title: "Benin" },
            { value: "BM", title: "Bermuda" },
            { value: "BT", title: "Bhutanese" },
            { value: "BO", title: "Bolivian" },
            { value: "BW", title: "Botswana" },
            { value: "BV", title: "Bouvet Island" },
            { value: "BR", title: "Brazilian" },
            { value: "GB", title: "British" },
            { value: "IO", title: "British Indian Ocean Territory" },
            { value: "BN", title: "Brunei" },
            { value: "BG", title: "Bulgaria" },
            { value: "BF", title: "Burkina Faso" },
            { value: "BI", title: "Burundi" },
            { value: "KH", title: "Cambodia" },
            { value: "CM", title: "Cambodian" },
            { value: "CA", title: "Canadian" },
            { value: "CV", title: "CAPE VERDEAN" },
            { value: "KY", title: "Caymanian" },
            { value: "CF", title: "Central African" },
            { value: "TD", title: "Chadian" },
            { value: "CL", title: "Chilean" },
            { value: "CN", title: "Chinese" },
            { value: "HK", title: "Chinese" },
            { value: "CH", title: "Chinese" },
            { value: "CO", title: "Columbian" },
            { value: "KM", title: "Comoran" },
            { value: "CG", title: "Congolese" },
            { value: "CD", title: "Congolese" },
            { value: "CU", title: "Cuban" },
            { value: "CY", title: "Cypriot" },
            { value: "CR", title: "Czech" },
            { value: "CZ", title: "Czech" },
            { value: "DK", title: "Danish" },
            { value: "DJ", title: "Djibouti" },
            { value: "DM", title: "Dominican" },
            { value: "DO", title: "Dominican" },
            { value: "NL", title: "Dutch" },
            { value: "TL", title: "East Timorese" },
            { value: "EC", title: "Ecuadorean" },
            { value: "EG", title: "Egyptian" },
            { value: "AE", title: "Emirian" },
            { value: "ER", title: "Eritrean" },
            { value: "EE", title: "Estonian" },
            { value: "ET", title: "Ethiopian" },
            { value: "FJ", title: "Fijian" },
            { value: "PH", title: "Filipino" },
            { value: "FI", title: "Finnish" },
            { value: "FR", title: "French" },
            { value: "GE", title: "Georgian" },
            { value: "DE", title: "German" },
            { value: "GH", title: "Ghanaian" },
            { value: "GR", title: "Greek" },
            { value: "GN", title: "Guinean" },
            { value: "GY", title: "Guyanese" },
            { value: "HU", title: "Hungarian" },
            { value: "IN", title: "Indian" },
            { value: "ID", title: "Indonesian" },
            { value: "IR", title: "Iranian" },
            { value: "IQ", title: "Iraqi" },
            { value: "IE", title: "Irish" },
            { value: "IS", title: "Israeli" },
            { value: "IT", title: "Italian" },
            { value: "IV", title: "Ivory Coastion" },
            { value: "JM", title: "Jamaican" },
            { value: "JP", title: "Japanese" },
            { value: "JO", title: "Jordanian" },
            { value: "KZ", title: "Kazakhstani" },
            { value: "KE", title: "Kenyan" },
            { value: "KW", title: "Kuwaiti" },
            { value: "LB", title: "Lebanese" },
            { value: "LT", title: "Lithunian" },
            { value: "LU", title: "Luxembourger" },
            { value: "MO", title: "Macau" },
            { value: "MY", title: "Malaysian" },
            { value: "MV", title: "Maldivan" },
            { value: "MU", title: "Mauritian" },
            { value: "MM", title: "Mayanmarese" },
            { value: "MC", title: "Monacan" },
            { value: "MN", title: "Mongolian" },
            { value: "MA", title: "Moroccan" },
            { value: "NA", title: "Namibian" },
            { value: "NP", title: "Nepalese" },
            { value: "NZ", title: "New Zealander" },
            { value: "NG", title: "Nigerian" },
            { value: "NO", title: "Norwegian" },
            { value: "OM", title: "Omani" },
            { value: "PK", title: "Pakistani" },
            { value: "PA", title: "Panamanian" },
            { value: "PY", title: "Paraguayan" },
            { value: "PE", title: "Peruvian" },
            { value: "PT", title: "Portugees" },
            { value: "QA", title: "Qatari" },
            { value: "RO", title: "Romanian" },
            { value: "RU", title: "Russian" },
            { value: "SV", title: "Salvadorean" },
            { value: "SA", title: "Saudi Arabian" },
            { value: "SN", title: "Senegalese" },
            { value: "SC", title: "Seychellois" },
            { value: "SG", title: "Singaporean" },
            { value: "SK", title: "Slovakian" },
            { value: "SO", title: "Somali" },
            { value: "ZA", title: "South African" },
            { value: "LK", title: "Sri Lankan" },
            { value: "SD", title: "Sudan" },
            { value: "SR", title: "Surinami" },
            { value: "SJ", title: "Svalbard and Jan Mayen Islandish" },
            { value: "SZ", title: "Swazilandish" },
            { value: "SE", title: "Swedish" },
            { value: "SY", title: "Syriai" },
            { value: "TW", title: "Taiwanese" },
            { value: "TJ", title: "Tajikisthani" },
            { value: "TZ", title: "Tanzanian" },
            { value: "TH", title: "Thai" },
            { value: "TG", title: "Togo" },
            { value: "TK", title: "Tokelaui" },
            { value: "TO", title: "Tongai" },
            { value: "TT", title: "Trinidad and Tobago" },
            { value: "TN", title: "Tunisian" },
            { value: "TR", title: "Turkish" },
            { value: "TM", title: "Turkmenistani" },
            { value: "TC", title: "Turks and Caicos Islandish" },
            { value: "TV", title: "Tuvalu" },
            { value: "UG", title: "Ugandan" },
            { value: "UA", title: "Ukrainian" },
            { value: "UM", title: "United States Minor Outlying Islandish" },
            { value: "UY", title: "Uruguayan" },
            { value: "UZ", title: "Uzbekistani" },
            { value: "VU", title: "Vanuatu" },
            { value: "VE", title: "Venezuelan" },
            { value: "VN", title: "Vietnamese" },
            { value: "VI", title: "Virgin Islandish" },
            { value: "WA", title: "Wallis and Futuna Islandish" },
            { value: "YE", title: "Yemeni" },
            { value: "YU", title: "Yugoslavian" },
            { value: "ZM", title: "Zambian" },
            { value: "ZW", title: "Zimbabwean" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          label="Residency Country"
          name="residency_country"
          id="residency_country"
          value={input.residency_country}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "AF", title: "Afghani" },
            { value: "AL", title: "Albania" },
            { value: "DZ", title: "Algeria" },
            { value: "US", title: "American" },
            { value: "AD", title: "Andorian" },
            { value: "AO", title: "Angolian" },
            { value: "AI", title: "Anguillan" },
            { value: "AQ", title: "Antarctic" },
            { value: "AG", title: "Antigua and Barbuda" },
            { value: "AR", title: "Argentine" },
            { value: "AM", title: "Armenian" },
            { value: "AW", title: "Arubian" },
            { value: "AU", title: "Australian" },
            { value: "AS", title: "Austrian" },
            { value: "BS", title: "Bahameese" },
            { value: "BH", title: "Bahrainian" },
            { value: "BD", title: "Bangladeshi" },
            { value: "BA", title: "Bangladeshi" },
            { value: "BB", title: "Barbadian" },
            { value: "BY", title: "Belarusian" },
            { value: "BE", title: "Belgian" },
            { value: "BZ", title: "Belizean" },
            { value: "BJ", title: "Benin" },
            { value: "BM", title: "Bermuda" },
            { value: "BT", title: "Bhutanese" },
            { value: "BO", title: "Bolivian" },
            { value: "BW", title: "Botswana" },
            { value: "BV", title: "Bouvet Island" },
            { value: "BR", title: "Brazilian" },
            { value: "GB", title: "British" },
            { value: "IO", title: "British Indian Ocean Territory" },
            { value: "BN", title: "Brunei" },
            { value: "BG", title: "Bulgaria" },
            { value: "BF", title: "Burkina Faso" },
            { value: "BI", title: "Burundi" },
            { value: "KH", title: "Cambodia" },
            { value: "CM", title: "Cambodian" },
            { value: "CA", title: "Canadian" },
            { value: "CV", title: "CAPE VERDEAN" },
            { value: "KY", title: "Caymanian" },
            { value: "CF", title: "Central African" },
            { value: "TD", title: "Chadian" },
            { value: "CL", title: "Chilean" },
            { value: "CN", title: "Chinese" },
            { value: "HK", title: "Chinese" },
            { value: "CH", title: "Chinese" },
            { value: "CO", title: "Columbian" },
            { value: "KM", title: "Comoran" },
            { value: "CG", title: "Congolese" },
            { value: "CD", title: "Congolese" },
            { value: "CU", title: "Cuban" },
            { value: "CY", title: "Cypriot" },
            { value: "CR", title: "Czech" },
            { value: "CZ", title: "Czech" },
            { value: "DK", title: "Danish" },
            { value: "DJ", title: "Djibouti" },
            { value: "DM", title: "Dominican" },
            { value: "DO", title: "Dominican" },
            { value: "NL", title: "Dutch" },
            { value: "TL", title: "East Timorese" },
            { value: "EC", title: "Ecuadorean" },
            { value: "EG", title: "Egyptian" },
            { value: "AE", title: "Emirian" },
            { value: "ER", title: "Eritrean" },
            { value: "EE", title: "Estonian" },
            { value: "ET", title: "Ethiopian" },
            { value: "FJ", title: "Fijian" },
            { value: "PH", title: "Filipino" },
            { value: "FI", title: "Finnish" },
            { value: "FR", title: "French" },
            { value: "GE", title: "Georgian" },
            { value: "DE", title: "German" },
            { value: "GH", title: "Ghanaian" },
            { value: "GR", title: "Greek" },
            { value: "GN", title: "Guinean" },
            { value: "GY", title: "Guyanese" },
            { value: "HU", title: "Hungarian" },
            { value: "IN", title: "Indian" },
            { value: "ID", title: "Indonesian" },
            { value: "IR", title: "Iranian" },
            { value: "IQ", title: "Iraqi" },
            { value: "IE", title: "Irish" },
            { value: "IS", title: "Israeli" },
            { value: "IT", title: "Italian" },
            { value: "IV", title: "Ivory Coastion" },
            { value: "JM", title: "Jamaican" },
            { value: "JP", title: "Japanese" },
            { value: "JO", title: "Jordanian" },
            { value: "KZ", title: "Kazakhstani" },
            { value: "KE", title: "Kenyan" },
            { value: "KW", title: "Kuwaiti" },
            { value: "LB", title: "Lebanese" },
            { value: "LT", title: "Lithunian" },
            { value: "LU", title: "Luxembourger" },
            { value: "MO", title: "Macau" },
            { value: "MY", title: "Malaysian" },
            { value: "MV", title: "Maldivan" },
            { value: "MU", title: "Mauritian" },
            { value: "MM", title: "Mayanmarese" },
            { value: "MC", title: "Monacan" },
            { value: "MN", title: "Mongolian" },
            { value: "MA", title: "Moroccan" },
            { value: "NA", title: "Namibian" },
            { value: "NP", title: "Nepalese" },
            { value: "NZ", title: "New Zealander" },
            { value: "NG", title: "Nigerian" },
            { value: "NO", title: "Norwegian" },
            { value: "OM", title: "Omani" },
            { value: "PK", title: "Pakistani" },
            { value: "PA", title: "Panamanian" },
            { value: "PY", title: "Paraguayan" },
            { value: "PE", title: "Peruvian" },
            { value: "PT", title: "Portugees" },
            { value: "QA", title: "Qatari" },
            { value: "RO", title: "Romanian" },
            { value: "RU", title: "Russian" },
            { value: "SV", title: "Salvadorean" },
            { value: "SA", title: "Saudi Arabian" },
            { value: "SN", title: "Senegalese" },
            { value: "SC", title: "Seychellois" },
            { value: "SG", title: "Singaporean" },
            { value: "SK", title: "Slovakian" },
            { value: "SO", title: "Somali" },
            { value: "ZA", title: "South African" },
            { value: "LK", title: "Sri Lankan" },
            { value: "SD", title: "Sudan" },
            { value: "SR", title: "Surinami" },
            { value: "SJ", title: "Svalbard and Jan Mayen Islandish" },
            { value: "SZ", title: "Swazilandish" },
            { value: "SE", title: "Swedish" },
            { value: "SY", title: "Syriai" },
            { value: "TW", title: "Taiwanese" },
            { value: "TJ", title: "Tajikisthani" },
            { value: "TZ", title: "Tanzanian" },
            { value: "TH", title: "Thai" },
            { value: "TG", title: "Togo" },
            { value: "TK", title: "Tokelaui" },
            { value: "TO", title: "Tongai" },
            { value: "TT", title: "Trinidad and Tobago" },
            { value: "TN", title: "Tunisian" },
            { value: "TR", title: "Turkish" },
            { value: "TM", title: "Turkmenistani" },
            { value: "TC", title: "Turks and Caicos Islandish" },
            { value: "TV", title: "Tuvalu" },
            { value: "UG", title: "Ugandan" },
            { value: "UA", title: "Ukrainian" },
            { value: "UM", title: "United States Minor Outlying Islandish" },
            { value: "UY", title: "Uruguayan" },
            { value: "UZ", title: "Uzbekistani" },
            { value: "VU", title: "Vanuatu" },
            { value: "VE", title: "Venezuelan" },
            { value: "VN", title: "Vietnamese" },
            { value: "VI", title: "Virgin Islandish" },
            { value: "WA", title: "Wallis and Futuna Islandish" },
            { value: "YE", title: "Yemeni" },
            { value: "YU", title: "Yugoslavian" },
            { value: "ZM", title: "Zambian" },
            { value: "ZW", title: "Zimbabwean" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="citizenship_country"
          id="citizenship_country"
          label="Citizenship Country"
          value={input.citizenship_country}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "", title: "Select From List" },
            { value: "AF", title: "Afghani" },
            { value: "AL", title: "Albania" },
            { value: "DZ", title: "Algeria" },
            { value: "US", title: "American" },
            { value: "AD", title: "Andorian" },
            { value: "AO", title: "Angolian" },
            { value: "AI", title: "Anguillan" },
            { value: "AQ", title: "Antarctic" },
            { value: "AG", title: "Antigua and Barbuda" },
            { value: "AR", title: "Argentine" },
            { value: "AM", title: "Armenian" },
            { value: "AW", title: "Arubian" },
            { value: "AU", title: "Australian" },
            { value: "AS", title: "Austrian" },
            { value: "BS", title: "Bahameese" },
            { value: "BH", title: "Bahrainian" },
            { value: "BD", title: "Bangladeshi" },
            { value: "BA", title: "Bangladeshi" },
            { value: "BB", title: "Barbadian" },
            { value: "BY", title: "Belarusian" },
            { value: "BE", title: "Belgian" },
            { value: "BZ", title: "Belizean" },
            { value: "BJ", title: "Benin" },
            { value: "BM", title: "Bermuda" },
            { value: "BT", title: "Bhutanese" },
            { value: "BO", title: "Bolivian" },
            { value: "BW", title: "Botswana" },
            { value: "BV", title: "Bouvet Island" },
            { value: "BR", title: "Brazilian" },
            { value: "GB", title: "British" },
            { value: "IO", title: "British Indian Ocean Territory" },
            { value: "BN", title: "Brunei" },
            { value: "BG", title: "Bulgaria" },
            { value: "BF", title: "Burkina Faso" },
            { value: "BI", title: "Burundi" },
            { value: "KH", title: "Cambodia" },
            { value: "CM", title: "Cambodian" },
            { value: "CA", title: "Canadian" },
            { value: "CV", title: "CAPE VERDEAN" },
            { value: "KY", title: "Caymanian" },
            { value: "CF", title: "Central African" },
            { value: "TD", title: "Chadian" },
            { value: "CL", title: "Chilean" },
            { value: "CN", title: "Chinese" },
            { value: "HK", title: "Chinese" },
            { value: "CH", title: "Chinese" },
            { value: "CO", title: "Columbian" },
            { value: "KM", title: "Comoran" },
            { value: "CG", title: "Congolese" },
            { value: "CD", title: "Congolese" },
            { value: "CU", title: "Cuban" },
            { value: "CY", title: "Cypriot" },
            { value: "CR", title: "Czech" },
            { value: "CZ", title: "Czech" },
            { value: "DK", title: "Danish" },
            { value: "DJ", title: "Djibouti" },
            { value: "DM", title: "Dominican" },
            { value: "DO", title: "Dominican" },
            { value: "NL", title: "Dutch" },
            { value: "TL", title: "East Timorese" },
            { value: "EC", title: "Ecuadorean" },
            { value: "EG", title: "Egyptian" },
            { value: "AE", title: "Emirian" },
            { value: "ER", title: "Eritrean" },
            { value: "EE", title: "Estonian" },
            { value: "ET", title: "Ethiopian" },
            { value: "FJ", title: "Fijian" },
            { value: "PH", title: "Filipino" },
            { value: "FI", title: "Finnish" },
            { value: "FR", title: "French" },
            { value: "GE", title: "Georgian" },
            { value: "DE", title: "German" },
            { value: "GH", title: "Ghanaian" },
            { value: "GR", title: "Greek" },
            { value: "GN", title: "Guinean" },
            { value: "GY", title: "Guyanese" },
            { value: "HU", title: "Hungarian" },
            { value: "IN", title: "Indian" },
            { value: "ID", title: "Indonesian" },
            { value: "IR", title: "Iranian" },
            { value: "IQ", title: "Iraqi" },
            { value: "IE", title: "Irish" },
            { value: "IS", title: "Israeli" },
            { value: "IT", title: "Italian" },
            { value: "IV", title: "Ivory Coastion" },
            { value: "JM", title: "Jamaican" },
            { value: "JP", title: "Japanese" },
            { value: "JO", title: "Jordanian" },
            { value: "KZ", title: "Kazakhstani" },
            { value: "KE", title: "Kenyan" },
            { value: "KW", title: "Kuwaiti" },
            { value: "LB", title: "Lebanese" },
            { value: "LT", title: "Lithunian" },
            { value: "LU", title: "Luxembourger" },
            { value: "MO", title: "Macau" },
            { value: "MY", title: "Malaysian" },
            { value: "MV", title: "Maldivan" },
            { value: "MU", title: "Mauritian" },
            { value: "MM", title: "Mayanmarese" },
            { value: "MC", title: "Monacan" },
            { value: "MN", title: "Mongolian" },
            { value: "MA", title: "Moroccan" },
            { value: "NA", title: "Namibian" },
            { value: "NP", title: "Nepalese" },
            { value: "NZ", title: "New Zealander" },
            { value: "NG", title: "Nigerian" },
            { value: "NO", title: "Norwegian" },
            { value: "OM", title: "Omani" },
            { value: "PK", title: "Pakistani" },
            { value: "PA", title: "Panamanian" },
            { value: "PY", title: "Paraguayan" },
            { value: "PE", title: "Peruvian" },
            { value: "PT", title: "Portugees" },
            { value: "QA", title: "Qatari" },
            { value: "RO", title: "Romanian" },
            { value: "RU", title: "Russian" },
            { value: "SV", title: "Salvadorean" },
            { value: "SA", title: "Saudi Arabian" },
            { value: "SN", title: "Senegalese" },
            { value: "SC", title: "Seychellois" },
            { value: "SG", title: "Singaporean" },
            { value: "SK", title: "Slovakian" },
            { value: "SO", title: "Somali" },
            { value: "ZA", title: "South African" },
            { value: "LK", title: "Sri Lankan" },
            { value: "SD", title: "Sudan" },
            { value: "SR", title: "Surinami" },
            { value: "SJ", title: "Svalbard and Jan Mayen Islandish" },
            { value: "SZ", title: "Swazilandish" },
            { value: "SE", title: "Swedish" },
            { value: "SY", title: "Syriai" },
            { value: "TW", title: "Taiwanese" },
            { value: "TJ", title: "Tajikisthani" },
            { value: "TZ", title: "Tanzanian" },
            { value: "TH", title: "Thai" },
            { value: "TG", title: "Togo" },
            { value: "TK", title: "Tokelaui" },
            { value: "TO", title: "Tongai" },
            { value: "TT", title: "Trinidad and Tobago" },
            { value: "TN", title: "Tunisian" },
            { value: "TR", title: "Turkish" },
            { value: "TM", title: "Turkmenistani" },
            { value: "TC", title: "Turks and Caicos Islandish" },
            { value: "TV", title: "Tuvalu" },
            { value: "UG", title: "Ugandan" },
            { value: "UA", title: "Ukrainian" },
            { value: "UM", title: "United States Minor Outlying Islandish" },
            { value: "UY", title: "Uruguayan" },
            { value: "UZ", title: "Uzbekistani" },
            { value: "VU", title: "Vanuatu" },
            { value: "VE", title: "Venezuelan" },
            { value: "VN", title: "Vietnamese" },
            { value: "VI", title: "Virgin Islandish" },
            { value: "WA", title: "Wallis and Futuna Islandish" },
            { value: "YE", title: "Yemeni" },
            { value: "YU", title: "Yugoslavian" },
            { value: "ZM", title: "Zambian" },
            { value: "ZW", title: "Zimbabwean" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="number"
          name="identification_number"
          id="identification_number"
          value={input.identification_number}
          label="Legal Identification Number"
          placeholder="22556567"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="CboEthicinity"
          id="CboEthicinity"
          value={input.CboEthicinity}
          label="Ethicinity"
          placeholder="Select List"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
          option={[
            {
              value: "53",
              title: "African American/Black (Not of Hispanic Origin)",
            },
            { value: "55", title: "American Indian/Alaskan Native" },
            { value: "54", title: "Asia/Pacific Islander" },
            { value: "51", title: "Decline to Identify" },
            { value: "56", title: "Hispanic" },
            { value: "52", title: "White (Not of Hispanic Origin)" },
          ]}
        />
        <Box>
          <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
            Contact Details
          </Heading>
        </Box>
        <SelectInputField
          name="contact_preference"
          id="contact_preference"
          label="Contact Preference"
          value={input.contact_preference}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: 0, title: "Select From List" },
            { value: 1, title: "Telephone" },
            { value: 2, title: "E-Mail" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="tel"
          name="phone"
          id="phone"
          value={input.phone}
          label="Phone #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="tel"
          name="mobile"
          id="mobile"
          value={input.mobile}
          label="Mobile #"
          placeholder="22556567"
          Required={true}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="alt_phone"
          id="alt_phone"
          value={input.alt_phone}
          label="Alt.Phone #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="business_phone"
          id="business_phone"
          value={input.business_phone}
          label="Business Phone #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="pager"
          id="pager"
          value={input.pager}
          label="Pager #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="extension"
          id="extension"
          value={input.extension}
          label="Ext #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="fax_num"
          id="fax_num"
          value={input.fax_num}
          label="Fax #"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="website"
          id="website"
          value={input.website}
          label="Web Site"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <CheckedField
          checkText={"Permanent Contact Details Same As Above"}
          value={input.chkPermanent}
          id="chkPermanent"
          name="chkPermanent"
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="career_level"
          id="career_level"
          label="Career Level"
          value={input.career_level}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "", title: "Select From List" },
            { value: "1", title: "Senior Executive" },
            { value: "2", title: "Executive" },
            { value: "3", title: "Management" },
            { value: "4", title: "Intermediate" },
            { value: "5", title: "Entry Level" },
            { value: "6", title: "Intern" },
            { value: "7", title: "Student" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="total_experience"
          id="total_experience"
          label="Total Experience"
          value={input.total_experience}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "0", title: "Select From List" },
            { value: "1", title: "Less than 1 year" },
            { value: "2", title: "Between 1 to 2 years" },
            { value: "3", title: "Between 2 to 4 years" },
            { value: "4", title: "Between 4 to 7 years" },
            { value: "5", title: "Between 7 to 10 years" },
            { value: "6", title: "More than 10 years" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="current_position"
          id="current_position"
          value={input.current_position}
          label="Current Position Title"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="current_salary"
          id="current_salary"
          value={input.current_salary}
          label="Current Salary/Rate"
          placeholder="0.00"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="salary_Currency_Code"
          id="salary_Currency_Code"
          label=""
          value={input.salary_Currency_Code}
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
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="salaryMode"
          id="salaryMode"
          label=""
          value={input.salaryMode}
          placeholder="Select from list"
          Required={false}
          option={[
            { value: "", title: "Select From List" },
            { value: "3", title: "Per Day" },
            { value: "2", title: "Per Year" },
            { value: "1", title: "Per Week" },
            { value: "0", title: "Per Hour" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="authorize_work"
          id="authorize_work"
          label="Authorization To Work"
          value={input.authorize_work}
          placeholder="Select from list"
          Required={false}
          option={[{ value: "", title: "Select From List" }]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <RadioInputField
          name="willingRelocate"
          id="willingRelocate"
          label="Security Clearance"
          Required={false}
          value={input.willingRelocate}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <CheckedField
          checkText={"Immediate Start Indicator"}
          id="chkImmediate"
          name="chkImmediate"
          value={input.chkImmediate}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <TextInputField
          type="text"
          name="legal_identification_number"
          id="legal_identification_number"
          value={input.legal_identification_number}
          label="Legal Identification Number"
          placeholder="22556567"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <Box>
          <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
            Preferences
          </Heading>
        </Box>
        <TextInputField
          type="text"
          name="current_rate"
          id="current_rate"
          value={input.current_rate}
          label="Current Salary/Rate"
          placeholder="0.00"
          Required={false}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="desiredWage_currency_code"
          id="desiredWage_currency_code"
          label=""
          value={input.desiredWage_currency_code}
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
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="desiredWage_Type"
          id="desiredWage_Type"
          label=""
          value={input.desiredWage_Type}
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
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="desiredSalary"
          id="desiredSalary"
          label="Desired Salary"
          placeholder="Select From List"
          value={input.desiredSalary}
          Required={false}
          option={[
            { value: "0", title: "<10,000" },
            { value: "1", title: "between 10,000 and 20,000" },
            { value: "2", title: "between 20,000 and 30,000" },
            { value: "3", title: "between 30,000 and 40,000" },
            { value: "4", title: "between 40,000 and 50,000" },
            { value: "5", title: "between 50,000 and 60,000" },
            { value: "6", title: "between 60,000 and 70,000" },
            { value: "7", title: "between 70,000 and 80,000" },
            { value: "8", title: "between 80,000 and 90,000" },
            { value: "9", title: "between 90,000 and 100,000" },
            { value: "10", title: ">100,000" },
            { value: "11", title: ">150,000" },
            { value: "12", title: ">200,000" },
            { value: "13", title: "No Preference" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <SelectInputField
          name="desired_job"
          id="desired_job"
          label="Desired Job Term"
          placeholder="All of the above"
          value={input.desired_job}
          Required={false}
          option={[
            { value: "", title: "Select From List" },
            { value: "0", title: "All of the above" },
            { value: "1", title: "Contract" },
            { value: "2", title: "Contract to Hire" },
            { value: "3", title: "Permanent" },
          ]}
          handleInputChange={(e) => onHandleChange(e)}
        />
        <RadioInputField
          name="willing_relocate"
          id="willing_relocate"
          Required={false}
          value={input.willing_relocate}
          handleInputChange={(e) => onHandleChange(e)}
          label="Willing to Relocate"
        />
        <TextAreaField
          name="relocateComment"
          id="relocateComment"
          value={input.relocateComment}
          handleInputChange={(e) => onHandleChange(e)}
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
      </form>
    </Box>
  );
};

export default FormModal;

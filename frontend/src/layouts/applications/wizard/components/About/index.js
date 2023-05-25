// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import lenna from "assets/images/Lenna.png";

import { useState } from "react";

function About({ onAboutChange }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [desc, setDesc] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    onAboutChange({ firstName: e.target.value, lastName, desc });
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    onAboutChange({ firstName, lastName: e.target.value, desc });
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    onAboutChange({ firstName, lastName, desc: e.target.value });
  };

  return (
    <MDBox>
      <MDBox width="82%" textAlign="center" mx="auto" my={4}>
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            基本情報の登録を開始します。
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <MDBox position="relative" height="max-content" mx="auto">
              <MDAvatar src={lenna} alt="profile picture" size="xxl" variant="rounded" />
              <MDBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <Tooltip title="Edit" placement="top">
                  <MDButton variant="gradient" color="info" size="small" iconOnly>
                    <Icon>edit</Icon>
                  </MDButton>
                </Tooltip>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={8}>
            <MDBox mb={2}>
              <FormField 
                type="text" 
                label="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                />
                
            </MDBox>
            <MDBox mb={2}>
              <FormField type="text" 
                label="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </MDBox>
            <MDBox>
              <FormField
                type="text"
                label="Discription"
                value={desc}
                onChange={handleDescChange}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default About;

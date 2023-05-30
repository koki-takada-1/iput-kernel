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


function About({ about, onAboutChange }) {

  const handleAboutChange = (field) => (event) => {
    onAboutChange({ ...about, [field]: event.target.value });
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
                value={about.firstName}
                onChange={handleAboutChange('firstName')}
                />
                
            </MDBox>
            <MDBox mb={2}>
              <FormField type="text" 
                label="Last Name"
                value={about.lastName}
                onChange={handleAboutChange('lastName')}
              />
            </MDBox>
            <MDBox>
              <FormField
                type="text"
                label="Discription"
                value={about.desc}
                onChange={handleAboutChange('desc')}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default About;

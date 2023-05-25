import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Account() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleButtonClick = (department) => {
    setSelectedDepartment(department);
  };


  const [design, setDesign] = useState(false);
  const [code, setCode] = useState(false);
  const [develop, setDevelop] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetCode = () => setCode(!code);
  const handleSetDevelop = () => setDevelop(!develop);

  const customButtonStyles = ({
    functions: { pxToRem, rgba },
    borders: { borderWidth },
    palette: { transparent, info },
    typography: { size },
  }) => ({
    width: pxToRem(164),
    height: pxToRem(130),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,
  
    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },
  
    "&:hover": {
      backgroundColor: `${transparent.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
      color: rgba(info.main, 0.75),
    },
  
    "&.MuiButton-contained:hover": {
      backgroundColor: `${info.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
      color: "white",
    },
  
    "&.MuiButton-contained:hover .material-icons-round": {
      color: "white !important",
    },
  
    "& .material-icons-round": {
      fontSize: `${size["3xl"]} !important`,
    },
  });
  

  return (
    <MDBox>
      {/* その他のコードは省略 */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <MDBox textAlign="center">
            <MDButton
              color="info"
              variant={selectedDepartment === 'DE' ? "contained" : "outlined"}
              onClick={() => handleButtonClick('DE')}
              sx={customButtonStyles}
            >
              <Icon sx={{ color: selectedDepartment === 'DE' ? "white" : "inherit" }}>brush</Icon>
            </MDButton>
            <MDTypography variant="h6" sx={{ mt: 1 }}>
              DE
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MDBox textAlign="center">
            <MDButton
              color="info"
              variant={selectedDepartment === 'IT' ? "contained" : "outlined"}
              onClick={() => handleButtonClick('IT')}
              sx={customButtonStyles}
            >
              <Icon sx={{ color: selectedDepartment === 'IT' ? "white" : "inherit" }}>developer_mode</Icon>
            </MDButton>
            <MDTypography variant="h6" sx={{ mt: 1 }}>
             IT 
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
      {/* その他のコードは省略 */}
    </MDBox>
  );
}

export default Account;

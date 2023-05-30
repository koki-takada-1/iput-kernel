// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Account({ department, onDepartmentChange }) {

  const handleButtonClick = (department) => {
    onDepartmentChange(department);
  };

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
    <MDBox mt={2}>
      {/* その他のコードは省略 */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <MDBox textAlign="center">
            <MDButton
              color="info"
              variant={department === 'DE' ? "contained" : "outlined"}
              onClick={() => handleButtonClick('DE')}
              sx={customButtonStyles}
            >
              <Icon sx={{ color: department === 'DE' ? "white" : "inherit" }}>brush</Icon>
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
              variant={department === 'IT' ? "contained" : "outlined"}
              onClick={() => handleButtonClick('IT')}
              sx={customButtonStyles}
            >
              <Icon sx={{ color: department === 'IT' ? "white" : "inherit" }}>developer_mode</Icon>
            </MDButton>
            <MDTypography variant="h6" sx={{ mt: 1 }}>
             IT 
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Account;

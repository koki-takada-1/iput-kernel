
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;


  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with React
        by
        
        <MDTypography variant="button" fontWeight="medium">
          &nbsp;bitcat&nbsp;
        </MDTypography>
        
        for self-approval.
      </MDBox>
      <MDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >

        <MDBox key={""} component="li" px={2} lineHeight={1}>
        
          <MDTypography variant="button" fontWeight="regular" color="text">
            {""}
          </MDTypography>

        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Footer

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;

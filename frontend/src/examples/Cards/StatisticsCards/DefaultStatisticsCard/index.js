// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";

function DefaultStatisticsCard({ title, count, percentage,time }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const cardStyle = {
    backgroundColor: '#ebeced'
  }
  return (
    
    <Card>
      <MDBox p={2}>
        <Grid container>
          <Grid item xs={12}>
            <MDBox mb={0.5} lineHeight={1} display="flex" justifyContent="space-between">
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {title}
              </MDTypography>
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {time}
              </MDTypography>
            </MDBox>
            <MDBox lineHeight={1} >
              <MDBox textAlign="center" my={1}>
                <MDTypography variant="h5" fontWeight="bold">
                  {count}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" justifyContent="space-between">
                <MDTypography variant="button" fontWeight="bold" color={percentage.color}>
                  {percentage.value}&nbsp;
                  
                </MDTypography>
                <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color={darkMode ? "text" : "secondary"}
                  >
                    {percentage.label}
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
          
        </Grid>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultStatisticsCard
DefaultStatisticsCard.defaultProps = {
  percentage: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

// Typechecking props for the DefaultStatisticsCard
DefaultStatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
      value: PropTypes.string,
    }),
  ]),
};

export default DefaultStatisticsCard;

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import Card from "@mui/material/Card";
// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";

function Analytics() {
  const { sales, tasks } = reportsLineChartData;
  const cardStyle = {
    backgroundColor: '#ebeced'
  };
  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        
        <MDBox mt={6}>
          <Grid container spacing={3} >
            <Grid item xs={12} md={6} lg={6}  >
              <Card style={cardStyle}>
                <MDBox p={1}>
                  <MDBox mt={3} mb={1} >
                    <DefaultStatisticsCard
                    title="1限"
                    time="9:15 - 10:45"
                    count="画像・音声認識"
                    percentage={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    title="2限"
                    time="10:55 - 12:25"
                    count="リバースエンジニアリング概論"
                    percentage={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    title="3限"
                    time="13:10 - 14:40"
                    count="画像・音声認識"
                    percentage={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    title="4限"
                    count="画像・音声認識"
                    percentage={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>

            <Grid item xs={12} md={4} lg={2}>
              <MDBox mb={3}>
              <DefaultInfoCard
                icon="chat"
                title="談話室"
                value="312"
              />
              </MDBox>
              <MDBox mb={3}>
              <DefaultInfoCard
                icon="school"
                title="自習室"
                value="322"
              />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Bookings"
                  count={281}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than lask week",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Today's Users"
                  count="2,300"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="Revenue"
                  count="34k"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Followers"
                  count="+91"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking1}
                  title="Cozy 5 Stars Apartment"
                  description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                  price="$899/night"
                  location="Barcelona, Spain"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking2}
                  title="Office Studio"
                  description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                  price="$1.119/night"
                  location="London, UK"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking3}
                  title="Beautiful Castle"
                  description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                  price="$459/night"
                  location="Milan, Italy"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;

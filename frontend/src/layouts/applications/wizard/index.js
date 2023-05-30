import { useState ,useRef } from "react";

import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
import About from "layouts/applications/wizard/components/About";
import Account from "layouts/applications/wizard/components/Account";
import Address from "layouts/applications/wizard/components/Address";

function getSteps() {
  return ["名前", "学科", "基本情報"];
}

function Wizard() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const [about, setAbout] = useState({ firstName: "", lastName: "", desc: "" });

  const [department, setDepartment] = useState("");
  
  const [basic, setBasic] = useState({
    sex: "",
    birthday: { year: '', month: '', day: '' },
    course: "",
    grade: 0,
    char: "",
    engChar: "",
    phone: "",
    tongue: "",
    skills: [],
  });


  const postProfile = async () => {
    console.log(about);
    console.log(department);
    console.log(basic);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <About
            about={about} 
            onAboutChange={setAbout}
          />
        );
      case 1:
        return <Account
          department={department} 
          onDepartmentChange={setDepartment}
        />;
      case 2:
        return <Address
          basic={basic} 
          onBasicChange={setBasic}
        />;
      default:
        return null;
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={8}>
        <Grid container justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} lg={8}>
            <MDBox mt={6} mb={8} textAlign="center">
              <MDBox mb={1}>
                <MDTypography variant="h3" fontWeight="bold">
                  君のプロフィールを作成
                </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="regular" color="secondary">
               この情報は開示することも隠すこともできるよ。 
              </MDTypography>
            </MDBox>
            <Card>
              <MDBox mt={-3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </MDBox>
              <MDBox p={2}>
                <MDBox>
                  {getStepContent(activeStep)}
                  <MDBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <MDBox />
                    ) : (
                      <MDButton variant="outlined" color="dark" onClick={handleBack}>
                        back
                      </MDButton>
                    )}
                    <MDButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : postProfile}
                    >
                      {isLastStep ? "send" : "next"}
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;

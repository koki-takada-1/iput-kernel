/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 PRO React examples
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/help-page/components/Header";
import Footer from "layouts/pages/help-page/components/Footer";
import PricingCards from "layouts/pages/help-page/components/PricingCards";
import TrustedBrands from "layouts/pages/help-page/components/TrustedBrands";
import Faq from "layouts/pages/help-page/components/Faq";

function PricingPage() {

  return (
    <PageLayout>
      <Header >
        <Faq />
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default PricingPage;

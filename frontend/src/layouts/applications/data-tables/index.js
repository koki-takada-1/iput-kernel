import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import axios from "axios";
import { useEffect , useState } from "react";

function DataTables() {
  const [rooms, setRooms] = useState([]); // 追加

  useEffect (() => {
    const fetchRooms = async () => {
      const res = await axios.get("/rooms/");
      console.log(res.data);
      setRooms(res.data);
    };
    fetchRooms();
  }, []);


  const dataTableData = {
    columns: [
      { Header: "教室名", accessor: "roomName", width: "50%" },
      { Header: "番号", accessor: "roomNumber", width: "10%" },
      { Header: "ステータス", accessor: "status" },
    ],
  
    rows: rooms
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <MDBox mb={3}>
          <Card>
            <MDBox p={3} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                教室一覧
              </MDTypography>
              
            </MDBox>
            <DataTable table={dataTableData} />
          </Card>
        </MDBox>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Datatable Search
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography>
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;

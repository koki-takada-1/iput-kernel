import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Grid";
// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import axios from "axios";
import { useEffect , useState } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]); // 追加
  const [newRoomName, setNewRoomName] = useState([]); // 追加
  const [newRoomNumber, setNewRoomNumber] = useState([]); // 追加
  const [newStatus, setNewRoomStatus] = useState([]); // 追加
  
  // axiosでpostする関数を作成
  const postRoom = async () => {
    const res = await axios.post("/rooms/", {
      roomName: "test",
      roomNumber: 1,
      status: "使用中",
    });
    console.log(res.data);
  };

  useEffect (() => {
    const fetchRooms = async () => {
      const res = await axios.get("/rooms/");
      console.log(res.data);
      setRooms(res.data);
    };
    fetchRooms();
  }, []);


  const roomTableData = {
    columns: [
      { Header: "教室名", accessor: "roomName", width: "45%" },
      { Header: "番号", accessor: "roomNumber", width: "20%" },
      { Header: "ステータス", accessor: "status" },
    ],
  
    rows: rooms
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} >
        <Grid  container spacing={1}>
          <Grid item xs={12} md={12} lg={8}>
            <MDBox mb={3}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <MDBox  lineHeight={1}>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室一覧
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      未ソートの場合は、生成順で表示されます。
                    </MDTypography>
                  </MDBox>
                  <MDButton 
                    variant="contained" 
                    color="info" 
                    >教室を追加
                  </MDButton>
                </MDBox>
                    
                <DataTable table={roomTableData} canSearch/>
          
              </Card>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox pb={1}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      ステータス変更
                    </MDTypography>
                  </MDBox>
                    <MDButton variant="contained" color="info">PUT
                    </MDButton>
                </MDBox>
              
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">  
                    <MDInput
                      placeholder="300"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">
                    <MDInput
                      placeholder="自習室"
                      fullWidth
                      onChange={(e) => setNewRoomStatus(e.target.value)}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
            <MDBox pb={1}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室削除
                    </MDTypography>
                  </MDBox>
                    <MDButton variant="contained" color="error">DELETE
                    </MDButton>
                </MDBox>
              
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">  
                    <MDInput
                      placeholder="300"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">
                    <MDInput
                      placeholder="自習室"
                      fullWidth
                      onChange={(e) => setNewRoomStatus(e.target.value)}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
            <MDBox>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室追加
                    </MDTypography>
                  </MDBox>
                    <MDButton variant="contained" color="warning">POST
                    </MDButton>
                </MDBox>
              
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="60%">  
                    
                    <MDInput
                      placeholder="300"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="20%">
                    <MDInput
                      placeholder="自習室"
                      fullWidth
                      onChange={(e) => setNewRoomStatus(e.target.value)}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Grid>
        </Grid>
        
        
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Rooms;

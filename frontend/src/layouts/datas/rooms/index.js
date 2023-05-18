import { useEffect, useState, useRef, useContext } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import axios from "axios";
import { AuthContext } from "states/AuthContext";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const putRoomNumberRef = useRef(null);
  const putRoomStatusRef = useRef(null);
  const deleteRoomNumberRef = useRef(null);
  const newRoomNameRef = useRef(null);
  const newRoomNumberRef = useRef(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios.get("/rooms/");
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  const postRoom = async () => {
    const res = await axios.post("/rooms/", {
      roomName: newRoomNameRef.current.value,
      roomNumber: newRoomNumberRef.current.value,
      userId: user._id,
    });
    setRooms((prevRooms) => [...prevRooms, res.data]);
  };

  const putRoom = async () => {
    const res = await axios.put(`/rooms/number/${putRoomNumberRef.current.value}`, {
      status: putRoomStatusRef.current.value,
    });
    setRooms((prevRooms) =>
      prevRooms.map((room) => (room.roomNumber === res.data.roomNumber ? res.data : room))
    );
  };

  const deleteRoom = async () => {
    const res = await axios.delete(`/rooms/number/${deleteRoomNumberRef.current.value}`, {
      data: { userId: user._id },
    });
    setRooms((prevRooms) => prevRooms.filter((room) => room.roomNumber !== res.data.roomNumber));
  };

  const roomTableData = {
    columns: [
      { Header: "番号", accessor: "roomNumber", width: "20%" },
      { Header: "教室名", accessor: "roomName", width: "45%" },
      { Header: "ステータス", accessor: "status" },
    ],
    rows: rooms,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={8}>
            <MDBox mb={3}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <MDBox lineHeight={1}>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室一覧
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      未ソートの場合は、生成順で表示されます。
                    </MDTypography>
                  </MDBox>
                  <MDButton variant="contained" color="info">
                    教室を追加
                  </MDButton>
                </MDBox>
                <DataTable table={roomTableData} canSearch />
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
                  <MDButton variant="contained" color="info" onClick={putRoom}>
                    PUT
                  </MDButton>
                </MDBox>
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">
                    <MDInput placeholder="300" inputRef={putRoomNumberRef} fullWidth />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="50%">
                    <MDInput placeholder="自習室" inputRef={putRoomStatusRef} fullWidth />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室追加
                    </MDTypography>
                  </MDBox>
                  <MDButton variant="contained" color="warning" onClick={postRoom}>
                    POST
                  </MDButton>
                </MDBox>

                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="番号" fullWidth inputRef={newRoomNumberRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="70%">
                    <MDInput placeholder="教室名" fullWidth inputRef={newRoomNameRef} />
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
                  <MDButton variant="contained" color="error" onClick={deleteRoom}>
                    DELETE
                  </MDButton>
                </MDBox>

                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1}>
                    <MDInput placeholder="番号" fullWidth inputRef={deleteRoomNumberRef} />
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
}

export default Rooms;
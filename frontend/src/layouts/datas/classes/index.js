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

function Classes() {
  const [classes, setClasses] = useState([]);
  const putRoomNumberRef = useRef(null);
  const putRoomStatusRef = useRef(null);
  const deleteRoomNumberRef = useRef(null);

  const newClassDepartmentRef = useRef("");
  const newClassGradeRef = useRef(0);
  const newClassNameRef = useRef("");
  const newClassCourseRef = useRef("");
  const newClassCharRef = useRef("");

  const { user } = useContext(AuthContext);


  const fetchClasses = async () => {
    const res = await axios.get("/classes/");
    setClasses(res.data);
  };

  const classesData = classes.map((res) => {
    return {
      ...res,
      classGrade: res.classGrade + " 年",
      students_len: res.studentsId.length + " 人",
      classChar: res.classChar + " 組",
    };
  });

  useEffect(() => {

    fetchClasses();
  }, []);

  const postClass = async () => {
    const res = await axios.post("/classes/", {
      department: newClassDepartmentRef.current.value,
      course: newClassCourseRef.current.value,
      classGrade: newClassGradeRef.current.value,
      classChar: newClassCharRef.current.value,
    });
    fetchClasses();
  };

  const putRoom = async () => {
    const res = await axios.put(`/rooms/number/${putRoomNumberRef.current.value}`, {
      status: putRoomStatusRef.current.value,
    });
    fetchClasses();
  };

  const deleteRoom = async () => {
    const res = await axios.delete(`/classes/${deleteRoomNumberRef.current.value}`, {
      data: { userId: user._id },
    });
    fetchClasses();
  };

  const roomTableData = {
    columns: [
      { Header: "学科", accessor: "department", width: "10%" , isSorted: true},
      { Header: "学年", accessor: "classGrade", width: "15%" },
      { Header: "コース", accessor: "course", width: "20%" },
      { Header: "クラス", accessor: "classChar", width: "15%" },
      { Header: "人数", accessor: "students_len", width: "15%" },
      { Header: "meta_id", accessor: "_id" , width:"40%" },
    ],
    rows: classesData,
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
                      クラス一覧
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      未ソートの場合は、生成順で表示されます。
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <DataTable table={roomTableData} canSearch/>
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
                  <MDButton variant="contained" color="warning" onClick={postClass}>
                    POST
                  </MDButton>
                </MDBox>

                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="学部" fullWidth inputRef={newClassDepartmentRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="学年" fullWidth inputRef={newClassGradeRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="コース" fullWidth inputRef={newClassCourseRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="15%">
                    <MDInput placeholder="クラス" fullWidth inputRef={newClassCharRef} />
                  </MDBox>
                </MDBox>
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
                      クラス削除
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

export default Classes;
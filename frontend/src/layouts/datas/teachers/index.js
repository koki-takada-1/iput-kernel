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
import { useEffect , useState ,useContext ,useRef} from "react";
import { AuthContext } from "states/AuthContext";
import { eventTupleToStore } from "@fullcalendar/react";

function Teachers() {
  const [teachers, setTeachers] = useState([]); // 追加

  const newFirstNameRef = useRef(null);
  const newLastNameRef = useRef(null);
  const newCourseRef = useRef(null);
  const deleteTeacherIdRef = useRef(null);

  const { user } = useContext(AuthContext);


  const fetchTeachers = async () => {
    const res = await axios.get("/teachers/");
    setTeachers(res.data);
  };
  
  // axiosでpostする関数を作成
  const postTeacher = async () => {    
    const newTeacher = {
      firstName: newFirstNameRef.current.value,
      lastName: newLastNameRef.current.value,
      course: newCourseRef.current.value,
      userId: user._id,
    };
    const res = await axios.post("/teachers/",newTeacher);
    console.log(res.data);
    fetchTeachers();
  };

  // axiosでdeleteする関数を作成
  const deleteTeacher = async () => {
    const res = await axios.delete("/teachers/"+deleteTeacherIdRef.current.value, {data:{userId:user._id}});
    fetchTeachers();
  };

  useEffect (() => {
    
    fetchTeachers();
  }, []);
  //res.dataのfirstNameとlastNameを結合してnameとして表示する
  const teachersData = teachers.map((res) => {
    return {
      ...res,
      name: `${res.firstName} ${res.lastName}`,
    };
  });


  const roomTableData = {
    columns: [
      { Header: "id", accessor: "_id", width: "35%" },
      { Header: "name", accessor: "name", width: "25%" },
      { Header: "course", accessor: "course" },
    ],
  

    rows: teachersData
  };

  console.log(user);
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
                      教員一覧
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      未ソートの場合は、生成順で表示されます。
                    </MDTypography>
                  </MDBox>
                  <MDButton 
                    variant="contained" 
                    color="info" 
                    >教員
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
                      教授追加
                    </MDTypography>
                  </MDBox>
                    <MDButton variant="contained" color="info"
                    onClick={postTeacher}
                    >POST
                    </MDButton>
                </MDBox>
              
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">  
                    <MDInput
                      placeholder="苗字"
                      fullWidth
                      //newTeacherの中にlastNameとして格納
                      inputRef={newFirstNameRef}
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput
                      placeholder="名前"          
                      fullWidth
                      inputRef={newLastNameRef}
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="20%">
                    <MDInput
                      placeholder="コース"
                      fullWidth
                      inputRef={newCourseRef}
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
                      教員削除
                    </MDTypography>
                  </MDBox>
                    <MDButton variant="contained" color="error" onClick={deleteTeacher}>DELETE
                    </MDButton>
                </MDBox>
              
                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                
                  <MDBox flex="1 1 auto" mr={1} >  
                    <MDInput
                      placeholder="ID"
                      fullWidth
                      inputRef={deleteTeacherIdRef}
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
export default Teachers;

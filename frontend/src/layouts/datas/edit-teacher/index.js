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
import { useEffect , useState ,useContext} from "react";
import { AuthContext } from "states/AuthContext";

function EditTeachers() {
  const [teachers, setTeachers] = useState([]); // 追加
  const [newTeacher, setNewTeacher] = useState({firstName:'',lastName:'',course:''}); // 追加
  const { user } = useContext(AuthContext);
  const handleFirstNameChange = (event) => {
    const newFirstName = event.target.value;
    setNewTeacher((prevData) => ({ ...prevData, firstName: newFirstName }));
  };
  const handleLastNameChange = (event) => {
    const newLastName = event.target.value;
    setNewTeacher((prevData) => ({ ...prevData, lastName: newLastName }));
  };
  const handleCourseChange = (event) => {
    const newCourse = event.target.value;
    setNewTeacher((prevData) => ({ ...prevData, course: newCourse }));
  };
  // axiosでpostする関数を作成
  const postTeacher = async () => {
    //newTeacherにuserのidを追加
    newTeacher.userId = user._id;
    const res = await axios.post("/teachers/",newTeacher);
    console.log(res.data);
  };

  useEffect (() => {
    const fetchTeachers = async () => {
      const res = await axios.get("/teachers/");
      console.log(res.data);
      setTeachers(res.data);
    };
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
      { Header: "firstname", accessor: "name", width: "25%" },
      { Header: "course", accessor: "course" },
    ],
  

    rows: teachersData
  };

  console.log(newTeacher);
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
                  <MDBox flex="1 1 auto" mr={1} flexBasis="40%">  
                    <MDInput
                      placeholder="苗字"
                      fullWidth
                      value={newTeacher.firstName}
                      //newTeacherの中にlastNameとして格納
                      onChange={handleFirstNameChange}
                    />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="40%">
                    <MDInput
                      placeholder="名前"
                      value={newTeacher.lastName}
                      fullWidth
                      onChange={handleLastNameChange}
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
                      placeholder="太郎"
                      fullWidth
                      
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
export default EditTeachers;

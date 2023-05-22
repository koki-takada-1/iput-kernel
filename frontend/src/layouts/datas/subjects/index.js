import { useEffect, useState, useRef, useContext } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
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

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const putSubjectNumberRef = useRef(null);
  const putSubjectStatusRef = useRef(null);
  const deleteSubjectNameRef = useRef(null);
  const newSubjectGradeRef = useRef(null);
  const newSubjectNameRef = useRef(null);
  const newSubjectCountRef = useRef(null);
  const newSubjectisRequireRef = useRef(null);
  const { user } = useContext(AuthContext);

  const fetchSubjects = async () => {
    const res = await axios.get("/subjects/");
    setSubjects(res.data);
  };
  useEffect(() => {
    fetchSubjects();
  }, []);

  const postSubject = async () => {
    
    const isrequire = newSubjectisRequireRef.current.value === "必須" ? true : false;

    const res = await axios.post("/subjects/", {
      grade: newSubjectGradeRef.current.value,
      subjectName: newSubjectNameRef.current.value,
      count: newSubjectCountRef.current.value,
      isRequire: newSubjectisRequireRef.current.value === "必修" ? true : false,
      userId: user._id,
    });
    fetchSubjects();
  };

  const putSubject = async () => {
    const res = await axios.put(`/subjects/number/${putSubjectNumberRef.current.value}`, {
      status: putSubjectStatusRef.current.value,
    });
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) => (subject.subjectNumber === res.data.subjectNumber ? res.data : subject))
    );
  };

  const deleteSubject = async () => {
    const res = await axios.delete(`/subjects/name/${deleteSubjectNameRef.current.value}`, {
      data: { userId: user._id },
    });
    fetchSubjects();
  };

  const subjectsData = subjects.map((res) => {
    return {
      ...res,
      grade: res.grade + "年",
      count: res.count + " 回",
      isRequire: res.isRequire ? "必修" : "選択",
    };
  });

  const subjectTableData = {
    columns: [
      { Header: "学年", accessor: "grade", width: "10%" },
      { Header: "講義名", accessor: "subjectName", width: "20%" },
      { Header: "選択/必修", accessor: "isRequire" , width: "10%" },
      { Header: "回数", accessor: "count", width: "10%" },
      { Header: "教員", accessor: "status", width: "30%" },
    ],
    rows: subjectsData,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={3}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <MDBox lineHeight={1}>
                    <MDTypography variant="h5" fontWeight="medium">
                      講義一覧
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      未ソートの場合は、生成順で表示されます。
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <DataTable table={subjectTableData} canSearch/>
              </Card>
            </MDBox>
            <MDBox pb={1}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      講義追加
                    </MDTypography>
                  </MDBox>
                  <MDButton variant="contained" color="warning" onClick={postSubject}>
                    POST
                  </MDButton>
                </MDBox>

                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1} flexBasis="10%">
                    <MDInput placeholder="学年" fullWidth inputRef={newSubjectGradeRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="科目名" fullWidth inputRef={newSubjectNameRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%">
                    <MDInput placeholder="回数" fullWidth inputRef={newSubjectCountRef} />
                  </MDBox>
                  <MDBox flex="1 1 auto" mr={1} flexBasis="30%" >
                    <Autocomplete
                      options={['選択', '必修']} 
                      renderInput={(params) => (
                        <MDInput
                          {...params}
                          placeholder="選択/必修"
                          fullWidth
                          inputRef={newSubjectisRequireRef}
                        />
                      )}
                    />
                  </MDBox>

                </MDBox>
              </Card>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>

            <MDBox pb={1}>
              <Card>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
                  <MDBox>
                    <MDTypography variant="h5" fontWeight="medium">
                      教室削除
                    </MDTypography>
                  </MDBox>
                  <MDButton variant="contained" color="error" onClick={deleteSubject}>
                    DELETE
                  </MDButton>
                </MDBox>

                <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" mr={1}>
                    <MDInput placeholder="講義名" fullWidth inputRef={deleteSubjectNameRef} />
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

export default Subjects;
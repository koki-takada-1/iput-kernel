
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import FormField from "layouts/pages/account/components/FormField";
import Autocomplete from "@mui/material/Autocomplete";

// Wizard application components

import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

const technologies = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Vue.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "C#",
  "Swift",
  "Kotlin",
  "Ruby",
  "PHP",
  "Go",
  "Rust",
  "Scala",
  "Haskell",
  "Objective-C",
  "Assembly",
  "Shell",
  "PowerShell",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud Platform",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Unity",
  "Unreal Engine",
  "Blender",
  "Maya"
];

const gender = ["男性","女性","その他"];
const itCourse = ["AI","IoT","Robot"];
const grade = ["一年生","二年生","三年生","四年生","OB","留年"];
const defaultClass=["A","B","C","D"];
const englishClass=["A","B","C","D","E","F","G","H","I"];
function Address() {
  return (
  <MDBox component="form" pb={3} px={3}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              
              options={gender}
              renderInput={(params) => (
                <FormField {...params} label="性別" InputLabelProps={{ shrink: true }} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <Autocomplete
                  defaultValue="February"
                  options={selectData.birthDate}
                  renderInput={(params) => (
                    <FormField
                      {...params}
                      label="誕生日"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  defaultValue="1"
                  options={selectData.days}
                  renderInput={(params) => (
                    <FormField {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  defaultValue="2002"
                  options={selectData.years}
                  renderInput={(params) => (
                    <FormField {...params} InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Autocomplete
        options={itCourse}
        renderInput={(params) => (
          <FormField
            {...params}
            placeholder="一年生等は空白"
            label="専攻コース"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <Autocomplete
        defaultValue="一年生"
        options={grade}
        renderInput={(params) => (
          <FormField
            {...params}
            label="学年"
            InputLabelProps={{ shrink: true }}
          />
        )}
      /> 
      </Grid>
      <Grid item xs={12} sm={3}>
        <Autocomplete        
        options={defaultClass}
        renderInput={(params) => (
          <FormField
            {...params}
            label="クラス"
            placeholder="A~D"
            InputLabelProps={{ shrink: true }}
          />
        )}
      /> 
      </Grid>
      <Grid item xs={12} sm={3}>
        <Autocomplete
        options={englishClass}
        renderInput={(params) => (
          <FormField
            {...params}
            label="英語クラス"
            placeholder="A~I"
            InputLabelProps={{ shrink: true }}
          />
        )}
      /> 
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormField
          label="電話番号"
          placeholder="080 1234 1234"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormField label="母国言語" placeholder="日本語" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Autocomplete
          multiple        
          options={technologies}
          renderInput={(params) => <FormField {...params} 
          placeholder="複数登録可"
          label="スキル"

          InputLabelProps={{ shrink: true }} />}
        />
      </Grid>
    </Grid>
  </MDBox> 
  );
}

export default Address;

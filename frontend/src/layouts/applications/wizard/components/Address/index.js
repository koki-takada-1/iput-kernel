import { useState } from "react";

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
const gradeOptions = [
  { name: "一年生", value: 1 },
  { name: "二年生", value: 2 },
  { name: "三年生", value: 3 },
  { name: "四年生", value: 4 },
  { name: "OB", value: 5 },
  { name: "留年", value: 6 },
];

const defaultClass=["A","B","C","D"];
const englishClass=["A","B","C","D","E","F","G","H","I"];

function Address({ basic , onBasicChange }) {

  const handleBasicChange = (field) => (event, newValue) => {
    let value;
    switch (field) {
      case 'skills':
        value = newValue;
        break;
      case 'grade':
        value = grade.indexOf(newValue) + 1;
        break;
      case 'month':
      case 'day':
      case 'year':
        value = { ...basic.birthday, [field]: newValue };
        break;
      default:
        value = newValue;
    }
    if (field === 'month' || field === 'day' || field === 'year') {
      const { year, month, day } = value;
      if (year && month && day) {
        value = new Date(year, month - 1, day);
      }
    }
    onBasicChange({ ...basic, [field]: value });
  };
  
  return (
    <MDBox component="form" pb={3} px={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                options={gender}
                value={basic.sex}
                onChange={handleBasicChange('sex')}
                renderInput={(params) => (
                  <FormField {...params} label="性別" InputLabelProps={{ shrink: true }} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                <Autocomplete
                  options={selectData.birthDate}
                  value={basic.birthday.month}
                  onChange={handleBasicChange('month')}
                  renderInput={(params) => (
                    <FormField
                      {...params}
                      label="誕生月"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    defaultValue="1"
                    options={selectData.days}
                    value={basic.birthday.day}
                    onChange={handleBasicChange('day')}
                    renderInput={(params) => (
                      <FormField {...params} InputLabelProps={{ shrink: true }} />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Autocomplete
                  defaultValue="2002"
                  options={selectData.years}
                  value={basic.birthday.year}
                  onChange={handleBasicChange('year')}
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
            value={basic.course}
            onChange={handleBasicChange('course')}
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
          defaultValue={gradeOptions[0]}
          options={gradeOptions}
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.value === value.value}
          value={basic.grade ? gradeOptions.find(option => option.value === basic.grade) : null}
          onChange={handleBasicChange('grade')}
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
            value={basic.class}
            onChange={handleBasicChange('class')}
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
            value={basic.engClass}
            onChange={handleBasicChange('engClass')}
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
            value={basic.phone}
            onChange={handleBasicChange('phone')}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormField
            label="母国言語"
            placeholder="日本語"
            value={basic.tongue}
            onChange={handleBasicChange('tongue')}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Autocomplete
            multiple
            options={technologies}
            value={basic.skills}
            onChange={handleBasicChange('skills')}
            renderInput={(params) => (
              <FormField
                {...params}
                placeholder="複数登録可"
                label="スキル"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </Grid>
      </Grid>
    </MDBox> 
  );
}

export default Address;
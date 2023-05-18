import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "states/AuthContext";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/bg-sign-in-cover.jpeg";
import { loginCall } from "actionCalls";

function Cover() {
  const [rememberMe, setRememberMe] = useState(false);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if (!validateEmail(email)) {
      // メールアドレスが無効な場合の処理
      // エラーメッセージを設定してログイン処理を中断する
      dispatch({ type: "LOGIN_ERROR", payload: "無効なメールアドレスです" });
      return;
    }
    
    loginCall({ email, password }, dispatch);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const domainRegex = /@tks\.iput\.ac\.jp$/i;
    return emailRegex.test(email) && domainRegex.test(email);
  };

  return (
    <CoverLayout image={bgImage}>
      {error && (
        <MDAlert color="error" dismissible>
          ログイン失敗！
        </MDAlert>
      )}
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            大学のメールアドレスとパスワードを入力してください。
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={handleLogin}>
          <MDBox mb={2}>
            <MDInput
              type="email"
              label="Email"
              variant="standard"
              fullWidth
              placeholder="tk******@tks.iput.ac.jp"
              InputLabelProps={{ shrink: true }}
              inputRef={emailRef}
              error={error && !validateEmail(emailRef.current?.value)}
              helperText={error && !validateEmail(emailRef.current?.value) && "無効なメールアドレスです"}
            />
          </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                InputLabelProps={{ shrink: true }}
                inputRef={passwordRef}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;自動ログイン
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton 
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                >
                Log in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                アカウントをお持ちではない?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  登録
                </MDTypography>
              </MDTypography>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
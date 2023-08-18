import React from "react";

import { Grid, Divider } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Container,
  TextField,
  Button,
} from "@mui/material";
import headerImg from "../../../assets/img/users/Vector1.jpg";
import footerImg from "../../../assets/img/users/Vector2.jpg";
import img1 from "../../../assets/img/users/Just a step light-01 1.png";
import img2 from "../../../assets/img/users/Frame 2.png";
import google from "../../../assets/img/users/Google.svg";
import facebook from "../../../assets/img/users/Facebook.svg";
import linkedin from "../../../assets/img/users/Linkedin.svg";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import "../candidate/Login.css";

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  border: "1px solid #6973FE",
  padding: "0 14px",
  marginBottom: "10px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const btnstyles = {
  color: "black",
  fontSize: "16px",
  backgroundColor: "#CCFFCC",
  border: "1px solid #CCFFCC",
  borderRadius: "20px",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
  marginBottom: "10px",
  textTransform: "capitalize",
};

const btnstyles1 = {
  color: "#6973FE",
  fontSize: "18px",
  fontWeight: "600",
  border: "1px solid white",
  borderRadius: "20px",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
  marginBottom: "10px",
  textTransform: "capitalize",
};

const iconsStyles = {
  backgroundColor: "#CCFFCC",
  borderRadius: "50px",
};

export default function EducationDetails2() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <img src={headerImg} alt="" className="header"/>
      <Container>
        <Grid container spacing={isMobile ? 1 : 2}>
          <Grid item xs={12} md={5} sx={style}>
            <img src={img2} alt="" className="img1" />
            <img src={img1} alt="" className="img2" />
          </Grid>

          
          <Grid item xs={12} md={1}>
            <div class="vl"></div>
          </Grid>
         
          

          <Grid item xs={12} md={6} sx={style}>
            <h2>Login</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12} md={10}>
                <TextField
                  id="outlined-basic"
                  label="Email/Username"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12} md={10}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild },
                  }}
                />
              </Grid>
            </Grid>

            <div className="middleContent">
              <h4>
                <CheckOutlinedIcon sx={iconsStyles} />
                &nbsp; Keep Me Signed In
              </h4>
              <h4>
                <span>Forgot Password</span>
              </h4>
            </div>

            <Button variant="outlined" sx={btnstyles}>
              Log In
            </Button>

            <Divider orientation="horizontal" flexItem>
              Or
            </Divider>

            <Button variant="outlined" sx={btnstyles1}>
              Login Via OTP
            </Button>

            <Divider orientation="horizontal" flexItem>
              Or
            </Divider>

            <div className="logoContainer">
              <Grid container spacing={1}>
                <Grid item xs>
                  <img src={google} alt="" className="logo" />
                </Grid>
                <Grid item xs>
                  <img src={facebook} alt="" className="logo" />
                </Grid>
                <Grid item xs>
                  <img src={linkedin} alt="" className="logo" />
                </Grid>
              </Grid>
            </div>

            <h4>
              Don't Have A Account?{" "}
              <Button variant="outlined" sx={btnstyles}>
                Register
              </Button>
            </h4>
          </Grid>
        </Grid>
      </Container>
      <img src={footerImg} alt="" className="footer"/>
    </>
  );
}

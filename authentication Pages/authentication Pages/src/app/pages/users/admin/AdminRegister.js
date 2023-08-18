import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Container, TextField, Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

import adminImg from "../../../assets/img/admin/admin-01.png";
import home from "../../../assets/img/admin/Home.png";
import headerImg from "../../../assets/img/users/Vector 1.png";
import footerImg from "../../../assets/img/users/Vector 2.png";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import google from "../../../assets/img/users/Google.svg";
import facebook from "../../../assets/img/users/Facebook.svg";
import linkedin from "../../../assets/img/users/Linkedin.svg";

import "../admin/AdminRegister.css";


const heading = {
  fontWeight: "500",
  textAlign: "center",
  color: "#6973FE",
  marginBottom: "10px",
  lineHeight: "70px",
};

const headingResponsive = {
  fontSize: "1.4rem",
};

const textFeild = {
  width: "100%",
  height: "50px",
  borderRadius: "30px",
  border: "1px solid #6973FE",
  padding: "0 14px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  marginBottom: "10px",
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

const iconsStyles = {
  backgroundColor: "#CCFFCC",
  borderRadius: "50px",
};

export default function EducationDetails2() {
  const handleClick = () => {};
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <img src={headerImg} alt="" className="header"/>
      <Container>
        <Grid container spacing={isMobile ? 1 : 3}>
          <Grid item xs={12} md={5}>
            <img src={adminImg} alt="" className="adminImg" />
          </Grid>

          <Grid item xs={12} md={1}>
            <div class="vl"></div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Container>
              <Typography
                variant="h4"
                sx={{ ...heading, ...(isSmallScreen && headingResponsive) }}
              >
                Tell Us About Yourself.
              </Typography>
              <h4>It Will Take Only Few Minuets.</h4>
              <Grid container rowSpacing={4} columnSpacing={8}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: textFeild,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container rowSpacing={4} columnSpacing={8}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: textFeild,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container rowSpacing={4} columnSpacing={8}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="91 | Mobile Number"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: textFeild,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container rowSpacing={4} columnSpacing={8}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Paassword"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      style: textFeild,
                    }}
                  />
                </Grid>
              </Grid>

              <div className="middleContent">
                <h4>
                  <CheckOutlinedIcon sx={iconsStyles} />
                  &nbsp; By registering, you agree to{" "}
                  <span>terms & conditions</span> & <span>privacy policy.</span>
                </h4>
              </div>

              <div className="loginbtn">
                <Button variant="outlined" sx={btnstyles}>
                  Continue <ArrowForwardOutlinedIcon />
                </Button>
              </div>

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
                Already Have A Account?{" "}
                <Button variant="outlined" sx={btnstyles}>
                  Log In
                </Button>
              </h4>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <img src={footerImg} alt="" className="footer"/>
    </>
  );
}

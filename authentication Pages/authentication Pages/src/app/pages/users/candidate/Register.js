import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Container,
  TextField,
  Button,
  Box,

} from "@mui/material";
import headerImg from "../../../assets/img/users/Vector1.jpg";
import footerImg from "../../../assets/img/users/Vector2.jpg";
import img1 from "../../../assets/img/users/Register Image.jpg";
import google from "../../../assets/img/users/Google.svg";
import facebook from "../../../assets/img/users/Facebook.svg";
import linkedin from "../../../assets/img/users/Linkedin.svg";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import "../candidate/Register.css";

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
  backgroundColor: "#CCFFCC",
  border: "1px solid #CCFFCC",
  borderRadius: "20px",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
  marginBottom: "10px",
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
        <Grid container spacing={isMobile ? 1 : 3}  >
          <Grid item xs={12} md={4} sx={style}>
            <img src={img1} alt="" className="img1" />

            <h2>Register With Your Resume</h2>
            <h4>We Will Autofill your Details</h4>

            <Button variant="outlined" sx={btnstyles}>
              <FileUploadOutlinedIcon />
              Upload Resume
            </Button>

            <h4 className="subText">
              Supported formats- pdf, doc, docx, csv, rtf, txt files File size
              should not exceed 5 MB
            </h4>
          </Grid>

          
          <Divider orientation="vertical" flexItem>
            <Typography>Or</Typography> 
          </Divider>
          
          

          <Grid item xs={12} md={6} sx={style} >
            <h2>Tell Us About Yourself</h2>
            <h4>It Will Take Only a Few Minutes</h4>
            <Grid container rowSpacing={4} columnSpacing={8} >
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild, width: "100%" },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container rowSpacing={4} columnSpacing={8}>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild, width: "100%" },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container rowSpacing={4} columnSpacing={8} >
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="91 | Mobile Number"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild, width: "100%" },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container rowSpacing={4} columnSpacing={8} >
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { ...textFeild, width: "100%" },
                  }}
                />
              </Grid>
            </Grid>
           
            <h4>
            <CheckOutlinedIcon sx={iconsStyles} />
                  &nbsp;
              By registering, you agree to <span>terms & conditions</span>  & 
              <span> privacy policy.</span>
            </h4>

            <Button variant="outlined" sx={btnstyles}>
              Continue <ArrowForwardIcon />
            </Button>

            <Divider orientation="horizontal" flexItem>
              Or Register With
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
          </Grid>
        </Grid>
      </Container>
      <img src={footerImg} alt="" className="footer"/>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import MainFormComponent from "./DiagnosisForm";
import classes from "./style.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newData } from "../Redux/feature/FORM_DATA";

function Form() {
  const [formLen, setFormLen] = useState([1]);
  const [parentState, setParentState] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state?.data);
  const values = data.initialState && Object.values(data?.initialState);
  const handleNewForm = () => {
    setFormLen((prev) => {
      let prevArray = [...prev];
      let lastDigit = prevArray[prevArray.length - 1];
      let newDigit = lastDigit + 1;
      return [...prevArray, newDigit];
    });
  };

  useEffect(() => {
    setFormLen(data.initialState ? Object.keys(data?.initialState) : [1]);
  }, []);
  const handleParentState = (formNum, dataObj) => {
    setParentState((prev) => {
      let currentObj = {};
      currentObj[formNum] = dataObj;
      return { ...prev, ...currentObj };
    });
  };
  const handleNext = () => {
    dispatch(newData(parentState));
    navigate("/table");
  };
  return (
    <>
      <Box className={classes.MainBox}>
        <Paper className={classes.PaperBox}>
          <Box className={classes.headingBox}>
            <Typography variant="h5" className={classes.MainHeading}>
              Pain and Functional Description
            </Typography>
            <Typography variant="body1">
              The Description of the current situation gives your optimum <br />
              trainer a picture of and clues to the underfying causes of your
              <br />
              problems
            </Typography>
          </Box>
          {formLen.map((ele, index) => (
            <MainFormComponent
              defaultData={values ? values[index] : {}}
              handleParentState={handleParentState}
              formNum={ele}
              parentState={parentState}
            />
          ))}
          <Box sx={{ display: "flex" }}>
            <hr />
            <Button onClick={handleNewForm}>
              <AddCircleIcon />
            </Button>
            <hr />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button variant="contained">BACK</Button>
              <Button variant="contained" onClick={handleNext}>
                NEXT
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Form;

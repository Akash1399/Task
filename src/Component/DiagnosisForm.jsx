import React, { useState, useEffect } from "react";
import {
  Box,
  FormControlLabel,
  Paper,
  RadioGroup,
  TextField,
  Typography,
  Radio,
  Checkbox,
  FormGroup,
  Button,
} from "@mui/material";
import classes from "./style.module.css";
function MainFormComponent(props) {
  const [data, setData] = useState({
    listSymptoms: "",
    diagnosedProblem: "",
    physicalTruma: "",
    mentalTrauma: "",
    oftenProblem: "",
    experienceProblem: [],
    level: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    setData(props.defaultData);
  }, []);
  useEffect(() => {
    props.handleParentState(props.formNum, data);
  }, [data]);
  console.log(data);
  return (
    <>
      <Box className={classes.formBox}>
        <Box>
          <Typography variant="body2">
            If you have problems with pain/aches,stiffness,weakness or
            functional problems,describe this/these below.(List the symptoms in
            descending order with the most troublesome first)
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            name="listSymptoms"
            value={data?.listSymptoms}
            onChange={handleInputs}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box className={classes.RadioLabelBox}>
            <Typography variant="body2">
              Have you been diagnosed with this problem ?
            </Typography>
          </Box>
          <Box>
            <RadioGroup
              row
              name="diagnosedProblem"
              value={data?.diagnosedProblem}
              onChange={handleInputs}
            >
              <FormControlLabel
                value="NotRelevant"
                control={<Radio />}
                label="Not Relevant"
              />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box className={classes.RadioLabelBox}>
            <Typography variant="body2">
              Did the problem start after a physical trauma ?
            </Typography>
          </Box>
          <Box>
            <RadioGroup
              row
              name="physicalTruma"
              value={data?.physicalTruma}
              onChange={handleInputs}
            >
              <FormControlLabel
                value="NotRelevant"
                control={<Radio />}
                label="Not Relevant"
              />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box className={classes.RadioLabelBox}>
            <Typography variant="body2">
              Did the problem start after a mental trauma ?
            </Typography>
          </Box>
          <Box>
            <RadioGroup
              row
              name="mentalTrauma"
              value={data?.mentalTrauma}
              onChange={handleInputs}
            >
              <FormControlLabel
                value="NotRelevant"
                control={<Radio />}
                label="Not Relevant"
              />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        </Box>
        <Box>
          <Typography>How often do you experience the Problem?</Typography>
          <RadioGroup
            row
            sx={{ gap: "20px" }}
            name="oftenProblem"
            value={data?.oftenProblem}
            onChange={handleInputs}
          >
            <FormControlLabel
              value="NotRelevant"
              control={<Radio />}
              label="Not Relevant"
            />
            <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
            <FormControlLabel
              value="SeveralTimes/Week"
              control={<Radio />}
              label="Several Times/Week"
            />
            <FormControlLabel
              value="AFewTimes/Month"
              control={<Radio />}
              label="A Few Times/Month"
            />
            <FormControlLabel
              value="AFewTimes/Year"
              control={<Radio />}
              label="A Few Times/Year"
            />
          </RadioGroup>
        </Box>
        <Box>
          <Typography>When do you experience the problem?</Typography>
          <Box>
            <RadioGroup
              name="experienceProblem"
              value={data?.experienceProblem}
              onChange={handleInputs}
            >
              <FormControlLabel
                control={<Radio />}
                label="Not Relevant"
                value={"NotRelevant"}
              />
              <FormControlLabel
                control={<Radio />}
                label="When Lying Down "
                value={"whenLyingDown"}
              />
              <FormControlLabel
                control={<Radio />}
                label="When Sitting"
                value={"whenSitting"}
              />
              <FormControlLabel
                control={<Radio />}
                label="Under Standing"
                value={"underStanding"}
              />
              <FormControlLabel
                control={<Radio />}
                label="In Walikng"
                value={"inWalking"}
              />
            </RadioGroup>
          </Box>
        </Box>
        <Box>
          <Typography>
            How Intensive is the experience of the problem on average on a 1-10
            scale?
          </Typography>
          <Box>
            <RadioGroup
              row
              sx={{ gap: "30px" }}
              name="level"
              value={data?.level}
              onChange={handleInputs}
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
              <FormControlLabel value="6" control={<Radio />} label="6" />
              <FormControlLabel value="7" control={<Radio />} label="7" />
              <FormControlLabel value="8" control={<Radio />} label="8" />
              <FormControlLabel value="9" control={<Radio />} label="9" />
              <FormControlLabel value="10" control={<Radio />} label="10" />
            </RadioGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainFormComponent;

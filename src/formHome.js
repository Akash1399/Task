import { useState } from "react";
import DigoForm from "./digoForm";
import { Button } from "@mui/material";

const FormHome = () => {
  const [formLen, setFormLen] = useState([1]);
  const [parentState, setParentState] = useState({});
  const handleNewForm = () => {
    setFormLen((prev) => {
      let prevArray = [...prev];
      let lastDigit = prevArray[prevArray.length - 1];
      let newDigit = lastDigit + 1;
      return [...prevArray, newDigit];
    });
  };

  const handleParentState = (formNum, dataObj) => {
    console.log("++++++++++++++++++++++++++++++");
    console.log(formNum, dataObj);
    setParentState((prev) => {
      let currentObj = {};
      currentObj[formNum] = dataObj;
      return { ...prev, ...currentObj };
    });
  };

  console.log(parentState);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {formLen.map((ele) => (
        <DigoForm
          handleParentState={handleParentState}
          formNum={ele}
          parentState={parentState}
        />
      ))}
      <div>
        <Button onClick={handleNewForm}>Add New</Button> <Button>Next</Button>
      </div>
    </div>
  );
};

export default FormHome;

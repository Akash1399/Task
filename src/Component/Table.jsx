import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Table() {
  const data = useSelector((state) => state.data);
  const [dataArray, setDataArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const values = Object.values(data.initialState);
    setDataArray(values);
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>Symptoms</th>
          <th>Diagnosed with this problem</th>
          <th>Physical Trauma</th>
          <th>Mental Trauma</th>
          <th>Experience the problem</th>
          <th>When experience the problem</th>
          <th>Intensity of problem</th>
        </tr>
        {dataArray.map((data, index) => {
          return (
            <tr>
              <td>{data.listSymptoms}</td>
              <td>{data.diagnosedProblem}</td>
              <td>{data.physicalTruma}</td>
              <td>{data.mentalTrauma}</td>
              <td>{data.oftenProblem}</td>
              <td>{data.experienceProblem}</td>
              <td>{data.level}</td>
            </tr>
          );
        })}
        <tr></tr>
      </table>
      <Button variant="contained" onClick={() => navigate("/")}>
        BACK
      </Button>
    </>
  );
}

export default Table;

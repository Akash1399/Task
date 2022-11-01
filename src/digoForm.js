import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";

const DigoForm = (props) => {
  const [formState, setFormState] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  useEffect(() => {
    props.handleParentState(props.formNum, formState);
  }, [formState]);

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FormLabel style={{ marginRight: "30px" }}>
            Have You dignosed with this problem
          </FormLabel>
          <RadioGroup
            defaultValue=""
            style={{ display: "flex", flexDirection: "row" }}
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, 1: e.target.value }));
            }}
          >
            <FormControlLabel
              value="Not relevant"
              control={<Radio />}
              label="Not relevent"
            />
            <FormControlLabel value="Yes" control={<Radio />} label="No" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        {/* //////////////////////////////////////////////////////////// */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FormLabel style={{ marginRight: "30px" }}>
            Did the Problem Start After Physical Trauma
          </FormLabel>
          <RadioGroup
            defaultValue=""
            style={{ display: "flex", flexDirection: "row" }}
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, 2: e.target.value }));
            }}
          >
            <FormControlLabel
              value="Not relevant"
              control={<Radio />}
              label="Not relevent"
            />
            <FormControlLabel value="Yes" control={<Radio />} label="No" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
};

export default DigoForm;

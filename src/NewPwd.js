import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useSetNewPassword from "./useSetNewPassword";
import useGetPassowrd from "./useGetPassword";

const NewPwd = () => {
  const [link, setLink] = useState("");
  const [value, setValue] = useState("");

  const { passwords } = useGetPassowrd();

  const [isLinkValid, setValidLink] = useState(true);
  const [isValueValid, setValidValue] = useState(true);

  const { handleAddNew } = useSetNewPassword();
  const handleAdd = () => {
    if (link === "") {
      setValidLink(false);
    }
    if (value === "") {
      setValidValue(false);
    }
    if (isLinkValid && isValueValid) {
      handleAddNew({
        id: passwords?.length ? passwords?.length : 0,
        link,
        value
      });
    }
  };
  return (
    <div>
      <div className="newItem">
        <TextField
          error={!isLinkValid}
          onChange={(e) => {
            setLink(e.target.value);
            setValidLink(true);
          }}
          value={link}
          id="outlined-basic"
          label="Link"
          variant="outlined"
          helperText={!isLinkValid ? "Please enter any value." : ""}
        />
        <br />
        <br />
        <TextField
          error={!isValueValid}
          helperText={!isValueValid ? "Please enter any value." : ""}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setValidValue(true);
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="outlined" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
};
export default NewPwd;

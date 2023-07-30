import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import useGetPassowrd from "./useGetPassword";
const style = {
  modalDesign: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 24,
    width: 300,
    background: "#fff",
    border: "2px solid lightgrey",
    borderRadius: "6px",
    padding: 15,
    textAlign: "center",
  },
  alertIcon: {
    color: "blue",
    marginRight: "5px",
  },
  modalItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const EditModal = ({ open, onClose, data }) => {
  const [link, setLink] = useState(data?.link);
  const [value, setValue] = useState(data?.value);

  const [isLinkValid, setValidLink] = useState(true);
  const [isValueValid, setValidValue] = useState(true);

  const { handleEdit } = useGetPassowrd();

  const handleSave = () => {
    if (link === "") {
      setValidLink(false);
    }
    if (value === "") {
      setValidValue(false);
    }
    if (isLinkValid && isValueValid) {
      handleEdit({ ...data, value, link });
      onClose();
    }
  };
  useEffect(() => {
    setLink(data?.link);
    setValue(data?.value);
  }, [data]);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style.modalDesign}>
          <h3>Update</h3>
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
          <Button variant="outlined" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;

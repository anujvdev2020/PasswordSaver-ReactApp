import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import useGetPassowrd from "./useGetPassword";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SuccessModal from "./SuccesModal";
import EditModal from "./EditModal";

const SavedPwd = () => {
  const { passwords, handleDelete } = useGetPassowrd();

  const [open, setopenModal] = useState(false);
  const [openEdit, seteditModal] = useState(false);
  const [data, setData] = useState({});

  const handleModalClose = () => {
    setopenModal(false);
  };
  const handleEditClose = () => {
    seteditModal(false);
    console.log("csc");
  };

  const style = {
    recordContainer: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      marginBottom:"5px"
    },
  };
  return (
    <div>
      <SuccessModal open={open} onClose={handleModalClose} />
      <EditModal open={openEdit} onClose={handleEditClose} data={data} />
      {passwords?.length > 0 ? (
        <div>
          {passwords.map((item, index) => (
            <div key={index}>
              <div style={style.recordContainer}>
                <div className="flexItem">
                  <Typography>{item?.link}</Typography>
                </div>
                <div className="flexItem">
                  <Typography>{item?.value}</Typography>
                </div>
                <div
                  className="flexItem"
                  onClick={() => {
                    setData(item);
                    seteditModal(true);
                  }}
                >
                  <ModeEditIcon className="editIcon" />
                </div>
                <div
                  onClick={() => {
                    setopenModal(true);
                    handleDelete(item?.id);
                  }}
                >
                  <DeleteIcon className="delIcon"></DeleteIcon>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved records !</p>
      )}
    </div>
  );
};

export default SavedPwd;

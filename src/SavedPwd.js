import React from "react";
import Typography from "@mui/material/Typography";
import useGetPassowrd from "./useGetPassword";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import useDeleteItem from "./useDeleteItem";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const SavedPwd = () => {
  const { passwords } = useGetPassowrd();
  const { handleDelete } = useDeleteItem();
  const ModalSection = () => {
    return (
      <>
        <Modal
          open={true}
          onClose={{}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={style}></div>
        </Modal>
      </>
    );
  };
  return (
    <div>
      {/* {ModalSection()} */}
      <Modal
        open={true}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ></Modal>
      {passwords?.length > 0 ? (
        <div>
          {passwords.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center"
                }}
              >
                <div className="flexItem">
                  <Typography>{item?.link}</Typography>
                </div>
                <div className="flexItem">
                  <Typography>{item?.value}</Typography>
                </div>
                <div className="flexItem">
                  <ModeEditIcon className="editIcon" />
                </div>
                <div onClick={() => handleDelete(item?.id)}>
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

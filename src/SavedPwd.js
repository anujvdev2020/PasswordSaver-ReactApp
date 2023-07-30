import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import useGetPassowrd from "./useGetPassword";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SuccessModal from "./SuccesModal";

const SavedPwd = () => {
  const { passwords, handleDelete } = useGetPassowrd();
  const [open, setopenModal] = useState(false);
  const handleModalClose = () => {
    setopenModal(false);
  };
  return (
    <div>
      <SuccessModal open={open} onClose={handleModalClose} />
      {passwords?.length > 0 ? (
        <div>
          {passwords.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
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
                <div
                  onClick={() => {
                    setopenModal(true)
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

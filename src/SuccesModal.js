import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
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
    marginRight:"5px"
  },
  modalItems:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },

};

const SuccessModal = ({ open, onClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style.modalDesign}>
          <div style={style.modalItems}>
            <div>
              <span>
                <InfoIcon style={style.alertIcon} />
              </span>{" "}
            </div>
            <div>
              <h3>Record Deleted </h3>
            </div>
          </div>

          <Button variant="outlined" onClick={() => onClose()}>
            Okay
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SuccessModal;

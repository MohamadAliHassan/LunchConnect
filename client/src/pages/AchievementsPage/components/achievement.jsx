import * as React from "react";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaStar, FaArrowLeft } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Achievement = ({ achievement }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(achievement);
  return (
    <li>
      <Button onClick={handleOpen}>
        <IconContext.Provider
          value={{ color: "black", size: "60%", margin: "0 auto" }}>
          <img
            className="achievement-icon"
            src={`http://localhost:5173/src/pages/AchievementsPage/assets/${achievement._id}.png`}
          />
        </IconContext.Provider>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, color: "black", fontSize: "2em" }}>
            {achievement.title}
          </Typography>
          <IconContext.Provider
            value={{ color: "black", size: "20%", width: "100%" }}>
            <span className="achievement-modal-span">
              <img
                className="achievement-modal-icon"
                src={`http://localhost:5173/src/pages/AchievementsPage/assets/${achievement._id}.png`}
              />
            </span>
          </IconContext.Provider>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "black", fontSize: "1.5em" }}>
            {achievement.description}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "black", fontSize: "2em" }}>
            {achievement.amount} <FaStar />
          </Typography>
        </Box>
      </Modal>
    </li>
  );
};

export default Achievement;

Achievement.propTypes = {
  achievement: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reward: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};

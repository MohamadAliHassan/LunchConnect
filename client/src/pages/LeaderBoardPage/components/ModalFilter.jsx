export const ModalFilter = ({ handleClose }) => {
  return (
    <div className="filter-modal">
      <div className="modalContent">
        <h2>Select your country, region, and company</h2>
        <select className="select">
          <option value="">Select country</option>
          {/* Add options for countries here */}
        </select>
        <select className="select">
          <option value="">Select region</option>
          {/* Add options for regions here */}
        </select>
        <select className="select">
          <option value="">Select company</option>
          {/* Add options for companies here */}
        </select>
        <button className="filterModal-btn" onClick={handleClose}>
          Confirm
        </button>
      </div>
    </div>
  );
};

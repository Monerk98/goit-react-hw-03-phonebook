import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onClick }) => (
  <li className={s.item}>
    {name}: {number}
    <button type="button" className={s.btn} onClick={onClick}>
      Delete
    </button>
  </li>
);
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;

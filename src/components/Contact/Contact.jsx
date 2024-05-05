import css from './Contact.module.css';
import { FaPhoneAlt,FaUser } from "react-icons/fa";

const Contact = ({ contact, onDeleteContact }) => {
    
    const handleDelete = () => {
    onDeleteContact(contact.id);
    };
    
  return (
    <li className={css.listItem}>
      <div className={css.contactBox}>
      <p className={css.text}><FaUser /> <b>{contact.name}</b></p>
      <p className={css.text}><FaPhoneAlt /> <b>{contact.number}</b></p>
       </div>
      <button className={css.buttonDlt} onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Contact
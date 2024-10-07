
import style from './Contact.module.css';
import { FaPhone, FaUser } from "react-icons/fa";

const Contact = ({ contact, onDeleteProfile}) => {
 
  return (
    <>
    <div className = {style.contact}>
      <div className = {style.contactInfo}>

      <p>
          <FaUser className={style.icon} />
          Name: {contact.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          Phone: {contact.number}
        </p>
      </div>
      <div className={style.buttonBlock}>
      <button className = {style.button} type = "button" onClick={() => onDeleteProfile(contact.id)} >Delete</button>
      </div>
    </div></>
  )
}

export default Contact;

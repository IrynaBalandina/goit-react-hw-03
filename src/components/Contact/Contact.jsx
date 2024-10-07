
import style from './Contact.module.css';
import { FaPhone, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDeleteProfile}) => {
 
  return (
    <div className = {style.contact}>
      <div className = {style.contactInfo}>

      <p>
          <FaUser className={style.icon} />
          Name: {name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          Phone: {number}
        </p>
      </div>
      <div className={style.buttonBlock}>
      <button className = {style.button} onClick={() => onDeleteProfile(id)} >Delete</button>
      </div>
    </div>
  )
}

export default Contact;

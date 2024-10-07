import Contact from "../Contact/Contact";
import style from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteProfile})=> {
  return (
    <ul className={style.list}>
      {contacts.map((item) => (
        <li className={style.item} key={item.id}>
          <Contact contact={item} onDeleteProfile={onDeleteProfile} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;


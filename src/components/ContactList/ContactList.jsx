import Contact from "../Contact/Contact";
import style from './ContactList.module.css'

const ContactList = ({contacts}) => {
  return (
    <div className= {style.contactsList}>
      <ul className = {style['contactsList']}>
      {contacts.map(contact => {
        return (

          
          <Contact
          key={contact.id}
          id = {contact.id}
            name={contact.name}
            number={contact.number}
          />
         
        );
      })}


      </ul>
    </div>
  );
};

export default ContactList;


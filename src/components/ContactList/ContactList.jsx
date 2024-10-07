import Contact from "../Contact/Contact";
import style from './ContactList.module.css'

const ContactList = ({onDeleteProfile, contacts}) => {
  return (
    <div className= {style.contactsList}>
      <ul className = {style['contactsList']}>
      {contacts.map(contact => {
        return (

          
          <Contact
          key={contacts.id}
          id = {contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteProfile = {onDeleteProfile}
          />
         
        );
      })}


      </ul>
    </div>
  );
};

export default ContactList;


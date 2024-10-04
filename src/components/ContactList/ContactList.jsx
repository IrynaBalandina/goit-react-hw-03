import Contact from "../Contact/Contact";
import style from './ContactList.module.css'

const ContactList = ({contacts}) => {
  return (
    <div className= {style.contacts}>
      <ul className = {style['contactsList']}>
      {contacts.map(({ id, name, number}) => {
        return (

          
          <Contact
          key={id}
            name={name}
            number={number}
          />
         
        );
      })}


      </ul>
    </div>
  )
}

export default ContactList;


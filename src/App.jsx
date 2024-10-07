
import { useEffect, useState } from 'react';
import style from  './App.module.css';
import ContactList from './components/ContactList/ContactList';
import dataContacts from './JSON/dataContacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';



function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || dataContacts
  );
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  
  const [search, setSearch] = useState("");
  


  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())

);
const submitForm = (newContact) => {
  setContacts([...contacts, newContact]);
};

const onDeleteProfile = (contactId) => { 
  const updatedUsers = contacts.filter((contact) => contact.id !== contactId);
 

  setContacts(updatedUsers)
}
  return (
    <div>
    <h1 className = {style.title}>Phonebook</h1>
   
    <ContactForm
    onAddContact={submitForm}
    />
    <SearchBox
     value ={search}
     onSearch = {setSearch}
     />
    <ContactList 
    contacts = {filterContacts}
    onDeleteProfile={onDeleteProfile}
   
    />

  </div>
  )
}

export default App;

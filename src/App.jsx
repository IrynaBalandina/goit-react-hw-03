
import { useState } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
import dataContacts from './JSON/dataContacts.json';


function App() {
  const [contacts, setContacts] = useState(dataContacts );
 

  return (
    <div>
    <h1>Phonebook</h1>
<ContactList contacts = {contacts}/>

  </div>
  )
}

export default App;

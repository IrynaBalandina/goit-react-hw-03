
import './App.css'
import ContactList from './components/ContactList/ContactList';
import contacts from './JSON/contacts.json';


function App() {
  

  return (
    <div>
    <h1>Phonebook</h1>
<ContactList contacts = {contacts}/>

  </div>
  )
}

export default App;

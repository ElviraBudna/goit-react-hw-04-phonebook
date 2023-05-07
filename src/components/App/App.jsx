import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { AppContainer, ContactsContainer, Title } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  const onFilter = e => {
    const searchContact = e.currentTarget.value;

    setFilter(searchContact);

    contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase().trim())
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <AppContainer>
      <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />
      <ContactsContainer>
        <Title>Contacts</Title>
        <Filter value={filter} onFilter={onFilter} />
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          filter={filter}
        />
      </ContactsContainer>
    </AppContainer>
  );
}

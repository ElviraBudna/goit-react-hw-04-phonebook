import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { AppContainer, ContactsContainer, Title } from './App.styled';

export class App extends Component {
  static defaultProps = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onFilter = e => {
    const searchContact = e.currentTarget.value;
    this.setState({ filter: searchContact });
    this.setState(prevState =>
      prevState.contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchContact.toLowerCase().trim())
      )
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <AppContainer>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          contacts={this.state.contacts}
        />
        <ContactsContainer>
          <Title>Contacts</Title>
          <Filter value={this.state.filter} onFilter={this.onFilter} />
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
            filter={this.state.filter}
          />
        </ContactsContainer>
      </AppContainer>
    );
  }
}

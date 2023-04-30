import PropTypes from 'prop-types';
import { DeleteButton, Container, Text } from './ContactItem.styled';

export default function ContactItem({ contacts, deleteContact, filter }) {
  const newContacts = [...contacts];
  const searchContact = newContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <Container>
      {filter === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              <Text>
                {contact.name}: <span>{contact.number}</span>
              </Text>
              <DeleteButton
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </DeleteButton>
            </li>
          ))
        : searchContact.map(contact => (
            <li key={contact.id}>
              <Text>
                {contact.name}: <span>{contact.number}</span>
              </Text>
              <DeleteButton
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </DeleteButton>
            </li>
          ))}
    </Container>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact, filter }) {
  return (
    <List>
      <ContactItem
        contacts={contacts}
        deleteContact={deleteContact}
        filter={filter}
      />
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

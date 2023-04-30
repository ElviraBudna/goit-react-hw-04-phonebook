import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  TitleForm,
  InputBox,
  ButtonForm,
  Input,
  Label,
} from './ContactForm.styled';

export class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts!`)
      : this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: this.props.name, number: this.props.number });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <TitleForm>Phonebook</TitleForm>
        <InputBox>
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="number">Number</Label>
          <Input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputBox>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  //   friends: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       isOnline: PropTypes.bool.isRequired,
  //       avatar: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //     })
  //   ),
};

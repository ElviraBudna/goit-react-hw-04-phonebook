import PropTypes from 'prop-types';
import { FilterContainer, Label, Input } from './Filter.styled';

export default function Filter({ value, onFilter }) {
  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name of contact"
        value={value}
        onChange={onFilter}
      />
    </FilterContainer>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

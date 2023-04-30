import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  ${'' /* margin: 0 auto; */}
  ${
    '' /* border: 1px solid #eeeeee;
  max-width: 280px;
  background-color: #f8fbfe; */
  }
`;

export const Label = styled.label`
  display: block;

  font-size: 16px;
  line-height: calc(20 / 16);
`;

export const Input = styled.input`
  padding: 12px 12px 12px 12px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #ffdab9;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Text = styled.p`
  margin-bottom: 4px;

  font-size: 18px;
`;

export const DeleteButton = styled.button`
  border-radius: 4px;
  border: 0.5px solid transparent;
  display: block;
  min-width: 60px;
  margin: 0 auto;

  color: #2f4f4f;
  background-color: #ffefd5;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 6px 12px;

  &:hover {
    background-color: #ffdab9;
  }
`;

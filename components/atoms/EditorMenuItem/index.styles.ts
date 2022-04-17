import styled from "styled-components";

interface Props {
  active: boolean;
}

export const Menu = styled.div<Props>`
  padding: 0 4px;
  border: 1px solid #475569;
  border-radius: 5px;
  font-size: 12px;
  font-family: 'Poppins';
  background-color: ${props => props.active ? "#475569" : "transparent"};
  color: ${props => props.active ? "white" : "#475569"};
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;
import styled from "styled-components";

interface Props {
  primary?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const StyledButton = styled.button<Props>`
  font-family: 'Poppins';
  border-radius: 10px;
  padding: 7px 15px;
  background-color: ${props => props.primary ? "#475569" : "transparent"};
  color: ${props => props.primary ? "#FFFFFF" : "#475569"};
  border: 1px solid #475569;
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;
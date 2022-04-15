import styled from "styled-components";

interface WrapperProps {
  primary: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  border-radius: 10px;
  padding: 7px 15px;
  background-color: ${props => props.primary ? "#475569" : "transparent"};

  &:hover {
    cursor: pointer;
  }

  p {
    color: ${props => props.primary ? "#FFFFFF" : "#000000"};
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
`;
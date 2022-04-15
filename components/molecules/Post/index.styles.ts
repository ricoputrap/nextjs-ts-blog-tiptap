import styled from "styled-components";

export const Card = styled.div`
  width: 470px;
  padding: 20px;
  background: #F8FAFC;
  border: 1px solid #CBD5E1;
  box-sizing: border-box;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Details = styled.div`
  margin-top: 12px;
`;

export const PublishedDate = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: #CBD5E1;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #1E293B;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
`;
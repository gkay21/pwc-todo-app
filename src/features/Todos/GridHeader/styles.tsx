import styled from "styled-components";

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  font-family: ${(p) => p.theme.font.Body};
  font-weight: bold;
  padding: 10px;
`;

export const Title = styled.p`
  margin-right: 10px;
`;

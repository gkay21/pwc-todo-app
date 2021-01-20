import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Count = styled.div`
  display: flex;
  margin: 36px 0;
  justify-content: flex-end;
`;

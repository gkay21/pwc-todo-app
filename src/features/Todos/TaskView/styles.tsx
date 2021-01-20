import styled from "styled-components";

export const Title = styled.div``;

export const Priority = styled.div``;

export const Delete = styled.button`
  background-color: ${(p) => p.theme.color.Red};
  cursor: pointer;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(p) => p.theme.color.Burgundy};
    box-shadow: 2px 4px 3px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Done = styled.input`
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 2px 4px 3px 0 rgba(0, 0, 0, 0.2);
  }
`;

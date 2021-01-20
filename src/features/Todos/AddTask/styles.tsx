import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: ${(p) => p.theme.font.Header};
  padding-bottom: 20px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "title priority"
    "submit submit";
  gap: 20px 10px;
`;

interface InputGroupProps {
  area: string;
}

export const InputGroup = styled.div<InputGroupProps>`
  grid-area: ${(p) => p.area};
`;

export const Title = styled.h3`
  padding: 10px;
  font-size: 1.1rem;
  font-family: ${(p) => p.theme.font.Body};
`;

export const Input = styled.input`
  font-family: ${(p) => p.theme.font.Body};
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  font-size: 1.1rem;
`;

export const Submit = styled.button`
  grid-area: submit;
  cursor: pointer;
  height: 50px;
  background-color: ${(p) => p.theme.color.Blue};
  color: ${(p) => p.theme.color.LightGrey};
  font-size: 1.2rem;
  border: none;

  &:disabled {
    cursor: default;
    background-color: ${(p) => p.theme.color.Silver};
  }
`;

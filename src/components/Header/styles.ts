import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  max-width: 370px;
  display: flex;
  justify-content: space-between;
  margin-top: 58px;
`

export const ButtonComeBack = styled.button`
  padding: 16px;
  background-color: rgba(var(--grey-3),1);
  border-radius: 4px;
  color: rgba(var(--grey-0), 1);
  border: transparent;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  &:hover {
    background-color: rgba(var(--grey-2), 1);
  }
`

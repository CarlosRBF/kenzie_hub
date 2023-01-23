import styled from "styled-components"

export const Figure = styled.figure`
margin-top: 78px;
`

export const ContainerForm = styled.div`
  width: 98%;
  max-width: 370px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  border-radius: 4px;
  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  h1 {
    margin-top: 42px;
  }
  a {
    width: 90%;
  }
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  label {
    margin-top: 28px;
  }
  input {
    margin-top: 10px;
  }
  p {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
`

export const Inputs = styled.input`
  padding: 14px;
  background-color: rgba(var(--grey-2), 1);
  border-radius: 3px;
  border: 1px solid #343b41;
  &:focus {
    color: rgba(var(--grey-0), 1);
    border: 1px solid #f8f9fa;
  }
`
export const ButtonEntry = styled.button`
  margin-top: 16px;
  margin-bottom: 34px;
  background-color: rgba(var(--color-primary), 1);
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  color: #fff;
  padding: 12px 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(var(--color-primary-disable), 1);
    color: rgba(var(--color-primary), 1);
  }
`
export const ButtonRegister = styled(ButtonEntry)`
  width: 100%;
  margin-bottom: 15px;
  background-color: rgba(var(--grey-1), 1);
  &:hover {
    background-color: rgba(var(--grey-2), 1);
    color: #fff;
    border: 1.2182px solid #343B41;
  }
`

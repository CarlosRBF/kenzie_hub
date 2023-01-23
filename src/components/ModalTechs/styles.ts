import styled from "styled-components"

export const Container = styled.div`
  width: 95%;
  height: 275px;
  max-width: 396px;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .info {
    display: flex;
    gap: 171px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgba(var(--grey-2), 1);
    .buttonExit {
      color: rgba(var(--grey-1), 1);
      border: transparent;
      background-color: inherit;
      cursor: pointer;
      font-size: 16px;
      transition: 200ms;
      &:hover {
      color: rgba(var(--grey-4), 1);
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.3);
      }
    }
  }
`

export const Form = styled.form`
  * {
    padding: 0;
    margin: 0;
  }
  width: 100%;
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(var(--grey-3), 1);
  label {
    width: 100%;
    max-width: 265px;
    margin-top: 20px;
  }
  .input {
    width: 100%;
    height: 40px;
    max-width: 243px;
    margin-top: 18px;
    padding: 0 10px;
    background-color: rgba(var(--grey-2), 1);
    color: rgba(var(--grey-0), 1);
    border-radius: 4px;
    border: 1px solid #f8f9fa;
    &:focus {
      background-color: rgba(var(--grey-3), 1);
      border: 1px solid #868E96;
    }
  }
  .errorMessage {
    margin-top: 8px;
  }
  .selectTechs {
    width: 100%;
    max-width: 265px;
    height: 40px;
    max-width: 265px;
    margin-top: 18px;
    padding: 0 10px;
    background-color: rgba(var(--grey-2), 1);
    color: rgba(var(--grey-0), 1);
    border-radius: 4px;
    border: 1px solid #f8f9fa;
    &:focus {
      background-color: rgba(var(--grey-3), 1);
      border: 1px solid #868E96;
    }
  }
  .buttonRegister {
    width: 100%;
    max-width: 265px;
    height: 40px;
    margin-top: 18px;
    background-color: rgba(var(--color-primary), 1);
    color: #fff;
    border-radius: 4px;
    border: 1px solid #ff577f;
    cursor: pointer;
    &:hover {
      background-color: rgba(var(--color-primary-disable), 1);
      border: 1px solid #59323f;
    }
  }
`

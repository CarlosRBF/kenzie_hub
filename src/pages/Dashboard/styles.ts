import styled from "styled-components"

export const Container = styled.header`
  width: 95%;
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`

export const ButtonExit = styled.button`
  padding: 10px 16px;
  background-color: rgba(var(--grey-3), 1);
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

export const ContainerInfo = styled.div`
  width: 100%;
  margin-top: 35px;
  border-top: 2px solid rgba(var(--grey-3), 1);
  border-bottom: 2px solid rgba(var(--grey-3), 1);
  gap: 20px;
  .contentContainer {
    height: 130px;
    margin: 0 auto;
    max-width: 780px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1,
    span {
      margin-left: 12px;
    }
  }
  @media (min-width: 705px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 330px;
  }
`

export const ContainerTechs = styled.div`
  width: 95%;
  max-width: 780px;
  .infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
  }
  .buttonPlus {
    background-color: rgba(var(--grey-3), 1);
    border: transparent;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
    color: aliceblue;
    font-size: 20px;
    transition: 500ms;
    &:hover {
      background-color: rgba(var(--grey-1), 1);
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .list-Techs {
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-top: 28px;
    gap: 16px;
    background-color: rgba(var(--grey-3), 1);
  }
  .tech {
    background-color: rgba(var(--grey-4), 1);
    border-radius: 4px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: rgba(var(--grey-2), 1);
    }
  }
  .tech--trash {
    display: flex;
    gap: 25px;
    align-items: center;
    .trash {
      font-size: 15px;
      transition: 300ms;
      cursor: pointer;
      &:hover {
        color: rgba(var(--grey-4), 1);
        -moz-transform: scale(1.4);
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
      }
    }
  }
`

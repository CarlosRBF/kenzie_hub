import { Link } from "react-router-dom";
import { ButtonComeBack, Container } from "./styles"

const logo = require("../assets/logo/Logo.svg").default

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <Link to="/login">
        <ButtonComeBack>Voltar</ButtonComeBack>
      </Link>
    </Container>
  )
}

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSchemaLogin } from "../../components/Requireds"
import {
  Figure,
  ContainerForm,
  Form,
  Inputs,
  ButtonEntry,
  ButtonRegister,
} from "./style"
import { DataOnSubmitLogin, UserContext } from "../../context/UserContext"
import { useContext } from "react"

const logo = require("../../components/assets/logo/Logo.svg").default

const Login = () => {

  const {onSubmitLogin} = useContext(UserContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataOnSubmitLogin>({ resolver: yupResolver(formSchemaLogin) })

  return (
    <>
      <Figure>
        <img src={logo} alt="Kenzie Hub" />
      </Figure>

      <ContainerForm>
        <h1 className="title1">Login</h1>
        <Form onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="email" className="headline-text">
            Email
          </label>
          <Inputs
            id="email"
            className="headline-italic"
            placeholder={"Digite aqui seu email"}
            {...register("email")}
          />
          <p className="headline-textMessage">{errors.email?.message}</p>

          <label htmlFor="password" className="headline-text">
            Senha
          </label>
          <Inputs
            id="password"
            className="headline-italic"
            placeholder={"Crie aqui sua senha"}
            type="password"
            {...register("password")}
          />
          <p className="headline-textMessage">{errors.password?.message}</p>
          <ButtonEntry type="submit" className="registration">
            Entrar
          </ButtonEntry>
        </Form>
        <p className="headline-bold">Ainda não possui uma conta ?</p>
        <Link to="/register">
          <ButtonRegister type="submit" className="registration">
            Cadastre-se
          </ButtonRegister>
        </Link>
      </ContainerForm>
    </>
  )
}

export default Login

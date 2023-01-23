import React from "react"
import { Button, ContainerForm, Form, Inputs } from "./styles"
import { Header } from "../../components/Header"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit } = useContext(UserContext)

  return (
    <>
      <Header />
      <ContainerForm>
        <div className="container--textForm">
          <h3 className="title1">Crie sua conta</h3>
          <span className="headline">Rápido e grátis, vamos nessa</span>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="headline-text">
            Nome
          </label>
          <Inputs
            id="name"
            className="headline-italic"
            placeholder={"Nome Completo"}
            {...register("name")}
          />
          <p className="headline-textMessage">{errors.name?.message}</p>

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

          <label htmlFor="confirmPassword" className="headline-text">
            Confirmar Senha
          </label>
          <Inputs
            id="confirmPassword"
            className="headline-italic"
            placeholder={"Confirme sua senha"}
            type="password"
            {...register("confirmPassword")}
          />
          <p className="headline-textMessage">
            {errors.confirmPassword?.message}
          </p>

          <label htmlFor="bio" className="headline-text">
            Bio
          </label>
          <Inputs
            id="bio"
            className="headline-italic"
            placeholder={"Escreva um pouco sobre você"}
            {...register("bio")}
          />
          <p className="headline-textMessage">{errors.bio?.message}</p>

          <label htmlFor="contact" className="headline-text">
            Contato
          </label>
          <Inputs
            id="contact"
            className="headline-italic"
            placeholder={"Opção de contato"}
            {...register("contact")}
          />
          <p className="headline-textMessage">{errors.contact?.message}</p>

          <label htmlFor="course_module" className="headline-text">
            Selecionar módulo
          </label>

          <select
            className="headline-italic select"
            id="course_module"
            {...register("course_module")}
          >
            <option
              className="headline-text"
              value="Primeiro módulo (Introdução ao Frontend)"
            >
              Primero Módulo (Introdução ao Frontend)
            </option>
            <option
              className="headline-text"
              value="Segundo módulo (Frontend Avançado)"
            >
              Segundo Módulo (Frontend Avançado)
            </option>
            <option
              className="headline-text"
              value="Terceiro módulo (Introdução ao Backend)"
            >
              Terceiro Módulo (Introdução ao Backend)
            </option>
            <option
              className="headline-text"
              value="Quarto módulo (Backend Avançado)"
            >
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <Button type="submit" className="registration">
            Cadastrar
          </Button>
        </Form>
      </ContainerForm>
    </>
  )
}

export default SignUp

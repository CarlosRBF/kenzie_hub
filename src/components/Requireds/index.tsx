import * as yup from "yup"

export const formSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .max(18, "Seu nome pode conter no máximo 18 caracteres"),
  email: yup
    .string()
    .email("Tipo de email inválido")
    .required("Email Obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Senha deve conter 1 número, 1 caracter especial uma letra maiúscula e minúscula"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup
    .string()
    .max(30, "Se descreva com poucas palavras :) ")
    .required("Descreva você !"),
  contact: yup
    .string()
    .required("Digite um número válido")
    .matches(
      /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/,
      "Número invalido!  Ex:(11)22222-3333"
    ),
  course_module: yup.string(),
})

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Tipo de email inválido")
    .required("Email Obrigatório"),
  password: yup.string().required("Senha Obrigatória"),
})

import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { UserContext } from "../../context/UserContext"
import api from "../../services/api"
import { Container, Form } from "./styles"

interface SubmitModal {
  name: string
  status: string
}

const ModalTechs = () => {
  const { modalOpen, setModalOpen, userTech, setUserTech } =
    useContext(UserContext)
  const formSchema = yup.object().shape({
    name: yup.string().required("Tecnologia Obrigatória"),
    status: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitModal>({ resolver: yupResolver(formSchema) })

  const onSubmitModal = (data: SubmitModal) => {
    api
      .post(
        "/users/techs",
        {
          title: data.name,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then(() => {
        setUserTech(!userTech)
        toast.success("Tecnologia criada com sucesso!", {
          autoClose: 1000,
        })
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Essa tecnologia já existe!", {
            autoClose: 1000,
          })
        }
      })
    setModalOpen(false)
  }
  return (
    <>
      {modalOpen && (
        <Container>
          <div className="info">
            <h1 className="title3">Cadastrar Tecnologia</h1>
            <button className="buttonExit" onClick={() => setModalOpen(false)}>
              X
            </button>
          </div>

          <Form onSubmit={handleSubmit(onSubmitModal)}>
            <label htmlFor="name" className="headline">
              Nome
            </label>
            <input
              id="name"
              className="headline-italic input"
              type="text"
              placeholder="Escreva sua tecnologia"
              {...register("name")}
            />
            <p className="headline-textMessage errorMessage">
              {errors.name?.message}
            </p>

            <label htmlFor="status" className="headline">
              Selecionar Status
            </label>
            <select id="status" className="selectTechs" {...register("status")}>
              <option className="headline-italic" value="Iniciante">
                Iniciante
              </option>
              <option className="headline-italic" value="Intermediário">
                Intermediário
              </option>
              <option className="headline-italic" value="Avançado">
                Avançado
              </option>
            </select>

            <button type="submit" className="buttonRegister">
              Cadastrar Tecnologia
            </button>
          </Form>
        </Container>
      )}
    </>
  )
}

export default ModalTechs

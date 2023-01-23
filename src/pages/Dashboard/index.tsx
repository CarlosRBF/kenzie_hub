import { IoMdTrash } from "react-icons/io"
import { Link, Navigate } from "react-router-dom"
import { ButtonExit, Container, ContainerInfo, ContainerTechs } from "./styles"
import api from "../../services/api"
import { useContext, useState } from "react"
import { IUserInfo, UserContext } from "../../context/UserContext"
import ModalTechs from "../../components/ModalTechs"
import { useEffect } from "react"
import { toast } from "react-toastify"

const logo = require("../../components/assets/logo/Logo.svg").default

const Dashboard = () => {
  const { setModalOpen, userTech, setUserTech } = useContext(UserContext)
  const token = window.localStorage.getItem("authToken")
  const id = window.localStorage.getItem("id")
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)

  const user = async () => {
    return await api
      .get(`/users/${id}`)
      .then((response) => {
        setUserInfo(response.data)
      })
      .catch((err) => err)
  }
  const deleteTech = async (id: string) => {
    return await api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia deletada!", {
          autoClose: 1500,
        })
      })
  }
  useEffect(() => {
    user()
  }, [userTech])
  return (
    <>
      <ModalTechs />
      {token === null && <Navigate to="/login" />}

      <Container>
        <img src={logo} alt="" />
        <Link to="/login">
          <ButtonExit
            onClick={() => {
              window.localStorage.removeItem("authToken")
              window.localStorage.removeItem("id")
            }}
          >
            Sair
          </ButtonExit>
        </Link>
      </Container>
      <ContainerInfo>
        <div className="contentContainer">
          <h1 className="title1">{`Olá, ${userInfo.name}`}</h1>
          <span className="headline-bold">{userInfo.course_module}</span>
        </div>
      </ContainerInfo>
      <ContainerTechs>
        <div className="infos">
          <h1 className="title2">Tecnologias</h1>
          <button onClick={() => setModalOpen(true)} className="buttonPlus">
            +
          </button>
        </div>
        <ul className="list-Techs">
          {userInfo.techs?.length ? (
            userInfo?.techs?.map((tech) => (
              <li key={tech.id} className="title3 tech">
                <span>{tech.title}</span>
                <div className="tech--trash">
                  <p className="headline">{tech.status}</p>
                  <IoMdTrash
                    onClick={async () => {
                      await deleteTech(tech.id)
                      setUserTech(!userTech)
                    }}
                    className="trash"
                  />
                </div>
              </li>
            ))
          ) : (
            <ul className="list-Techs">
              <span className="title3">
                Não foi encontrada nenhuma tecnologia!
              </span>
              <p className="headline">Edite seu perfil :)</p>
            </ul>
          )}
        </ul>
      </ContainerTechs>
    </>
  )
}

export default Dashboard

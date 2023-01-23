import { yupResolver } from "@hookform/resolvers/yup"
import { ReactNode, useEffect, createContext, useState } from "react"
import { DeepRequired, FieldErrorsImpl, FieldValues, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { formSchemaRegister } from "../components/Requireds"
import api from "../services/api"

interface PropsData {
  children: ReactNode;
}

export interface ProviderStatesData {
  authorization: boolean;
  setAuthorization?: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userTech: boolean;
  setUserTech: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<DataOnSubmit>;
  handleSubmit: UseFormHandleSubmit<DataOnSubmit>;
  errors: FieldErrorsImpl<DeepRequired<DataOnSubmit>>;
  onSubmit: (data: DataOnSubmit) => void;
  onSubmitLogin: (data: DataOnSubmitLogin) => void;
}

export interface DataOnSubmitLogin {
  email: string;
  password: string; 
}

interface DataOnSubmit {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs?: ITechs[];
}


export const UserContext = createContext<ProviderStatesData>({} as ProviderStatesData)

function UserProvider({ children }: PropsData) {
  let navigate = useNavigate()
  const [authorization, setAuthorization] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [userTech, setUserTech] = useState(false)

  useEffect(() => {
    api
      .get<IUserInfo>("/profile", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setAuthorization(true)
        navigate("/dashboard")
      })
      .catch((res) => setAuthorization(false))
  }, [])

  const onSubmitLogin = (data: DataOnSubmitLogin) => {
    api
      .post("/sessions", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        window.localStorage.setItem("authToken", response.data.token)
        window.localStorage.setItem("id", response.data.user.id)
        toast.success("Redirecionando...", {
          autoClose: 700,
        })
        navigate("/dashboard")
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Email ou senha errada!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          })
        }
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataOnSubmit>({ resolver: yupResolver(formSchemaRegister) })

  const onSubmit = (data: DataOnSubmit) => {
    api
      .post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      })
      .then((response) => {
        navigate("../login")
        toast.success("Conta criada com sucesso!", {
          autoClose: 1500,
        })
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Esse email já existe!", {
            autoClose: 1500,
          })
        }
      })
  }
  return (
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        onSubmit,
        onSubmitLogin,
        authorization,
        modalOpen,
        setModalOpen,
        userTech,
        setUserTech,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

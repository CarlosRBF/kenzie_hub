import { Inputs } from "./styles"

interface InputProps {
  placeholder: string
}

const Input = ({ placeholder }: InputProps) => {
  return <Inputs className="headline-italic" placeholder={placeholder} />
}

export default Input

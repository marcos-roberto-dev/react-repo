import styled, { keyframes } from "styled-components"
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

const rotateLoading = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`
export const LinkDetail = styled(Link)`
  color: #0d2636;
`

export const IconGitHub = styled(FaGithub)`
  margin-right: 10px;
`

export const IconAdd = styled(FaPlus)`
`

export const IconLoading = styled(FaSpinner)`
  animation: ${rotateLoading} .6s infinite ease-in;
`

export const IconTrash = styled(FaTrash)`
`

export const IconBars = styled(FaBars)`
`

const Button = styled.button`
  background: #0d2636;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
`

export const Title = styled.h1`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid #DDD;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 17px;
`

export const SubmitButton = styled(Button).attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  margin-left: 10px;
  padding: 0 15px;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const ListRepositories = styled.ul`
  margin-top: 40px;
`

export const RepositorieItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + li {
    margin-top: 20px;
    border-top: 1px solid #EEE;
    padding-top: 20px;
  }
`

export const RepositorieSpan = styled.span`
  display: flex;
  align-items: center;
`

export const RemoveRepositorie = styled(Button).attrs({
  type: "button"
})`
  background: #FFF;
  border-radius: none;
  margin-right: 20px;
`

export const DetailRepositorie = styled(Button).attrs({
  type: "button"
})`
  background: #FFF;
  border-radius: none;
  margin-right: 10px;

`
import styled from "styled-components"
import { FaGithub, FaPlus } from "react-icons/fa"

export const IconGitHub = styled(FaGithub)`
  margin-right: 10px;
`

export const IconAdd = styled(FaPlus)`

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

export const SubmitButton = styled.button`
  background: #0d2636;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
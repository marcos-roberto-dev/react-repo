import React, { useState, useCallback, useEffect } from "react"

import * as S from "./styles"

import api from "../../services/api"

export default function Main() {
  const [newRepo, setNewRepo] = useState("")
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingList, setLoadingList] = useState(false)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setLoadingList(true)
    const repositoriesJson = JSON.parse(localStorage.getItem("repositories"))
    setTimeout(() => {
      if (repositoriesJson) {
        setRepositories(repositoriesJson)
        setLoadingList(false)
      }
    }, 300)
  }, [])

  useEffect(() => {
    const jsonRepositories = JSON.stringify(repositories)
    localStorage.setItem("repositories", jsonRepositories)
  }, [repositories])

  function handleInputChange(event) {
    setNewRepo(event.target.value)
    setAlert(false)
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault()

    async function submit() {
      setLoading(true)

      try {

        if (newRepo === "") {
          setAlert(true)
          throw new Error("Digite um repositorio valido!")
        }

        const hasRepositorie = repositories.some(repo => repo.name === newRepo)

        const response = await api.get(`repos/${newRepo}`)
        const data = {
          name: response.data.full_name
        }

        if (hasRepositorie) {
          setAlert(true)
          throw new Error("Esse repositorio já existe!")
        }

        setRepositories([...repositories, data])
        setNewRepo("")
      }
      catch (err) {
        setAlert(true)
        console.log("ERRO AO BUSCAR REPOSITORIO: ", err)
      }
      finally {
        setLoading(false)
      }
    }

    submit()

  }, [newRepo, repositories])

  const deleteRepositorie = useCallback((name) => {
    const find = repositories.filter(repo => (
      repo.name !== name
    ))

    setRepositories(find)

  }, [repositories])

  return (
    <S.Container>
      <S.Title>
        <S.IconGitHub size={25} />
        Meus Repositorios
      </S.Title>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleInputChange}
          error={alert}
        />
        <S.SubmitButton loading={loading ? 1 : 0}>
          {loading
            ? <S.IconLoading size={14} color="#FFF" />
            : <S.IconAdd size={14} color="#FFF" />
          }
        </S.SubmitButton>
      </S.Form>

      {repositories.length > 0
        ? (
          <S.ListRepositories>
            {repositories.map(repo => (
              <S.RepositorieItem key={repo.name}>
                <S.RepositorieSpan>
                  <S.RemoveRepositorie onClick={() => deleteRepositorie(repo.name)}>
                    <S.IconTrash size={14} />
                  </S.RemoveRepositorie>
                  {repo.name}
                </S.RepositorieSpan>
                <S.DetailRepositorie>
                  <S.LinkDetail to={`/repositorie/${repo.name}`}>
                    <S.IconBars size={25} />
                  </S.LinkDetail>
                </S.DetailRepositorie>
              </S.RepositorieItem>
            ))}
          </S.ListRepositories>)
        : loadingList && (
          <S.LoadingContainer>
            <S.IconLoading size={25} color="#0d2636" />
          </S.LoadingContainer>
        )
      }

    </S.Container>
  )
}
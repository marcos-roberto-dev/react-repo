import React, { useState, useCallback } from "react"

import * as S from "./styles"

import api from "../../services/api"

export default function Main() {
  const [newRepo, setNewRepo] = useState("")
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  function handleInputChange(event) {
    setNewRepo(event.target.value)
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault()

    async function submit() {
      setLoading(true)

      try {
        const response = await api.get(`repos/${newRepo}`)
        const data = {
          name: response.data.full_name
        }

        setRepositories([...repositories, data])
        setNewRepo("")
      }
      catch (err) {
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
        />
        <S.SubmitButton loading={loading ? 1 : 0}>
          {loading
            ? <S.IconLoading size={14} color="#FFF" />
            : <S.IconAdd size={14} color="#FFF" />
          }
        </S.SubmitButton>
      </S.Form>

      {repositories.length > 0 &&
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
        </S.ListRepositories>
      }

    </S.Container>
  )
}
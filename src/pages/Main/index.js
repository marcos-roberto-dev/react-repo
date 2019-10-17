import React from "react"

import * as S from "./styles"

export default function Main() {
  return (
    <S.Container>
      <S.Title>
        <S.IconGitHub size={25} />
        Meus Repositorios
      </S.Title>

      <S.Form onSubmit={() => { }}>
        <S.Input type="text" placeholder="Adicionar Repositorios" />
        <S.SubmitButton>
          <S.IconAdd size={14} color="#FFF" />
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}
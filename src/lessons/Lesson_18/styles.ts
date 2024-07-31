//шаг-1 стилизация
import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const CatFactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const CatFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const CatFactText = styled.p`
  font-size: 24px;
  font-weight: bold;
`
//8-2
export const CatFactWrapper = styled.div`
  display: flex;
  gap: 10px;
`
//8-2
export const ButtonControl = styled.div`
  min-width: 100px;
`
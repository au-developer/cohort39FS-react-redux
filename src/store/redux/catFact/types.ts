
// шаг 4-3 типизация  факта
export interface CatFact {
    id: string
    fact: string
  }
  // шаг 4-3 типизация  хранилища
  export interface CatFactSliceState {
    catFacts: CatFact[]
    error: string | undefined
  }
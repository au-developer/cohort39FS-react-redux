


//шаг-4 пропишем слайс
//6-1 импорт библиотеки для работы с ассинхронными запросами
import axios from "axios"
import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"

//8-6 импорт для удаления факта
import { PayloadAction } from "@reduxjs/toolkit"
//4-3 импорт
import { CatFactSliceState, CatFact } from "./types"
// 4-4 дефолтные значения + типизация

const catFactInitialState: CatFactSliceState = {
  catFacts: [],
  error: undefined,
}
// 4-1 шаблон для слайса
//4-6 export
export const catFactSlice = createAppSlice({
  //4-5 передача значений
    name: "CAT_FACT",
  initialState: catFactInitialState,
 //4-5 заглушка  виде кробек функции для редьюсера
  reducers: create => ({
    // asyncThunk - метод у обьекта create, он позволяет работать с асинхронностью в redux
    // принимает в себя 2 аргумента
    // 1.ф-ия callback, которая выполняет асинхронные действия. Например запрос на сервер
    // 2. обхект- в котором содержаться 3 reducers - pending, fulfilled и rejected
    // pending, fulfilled и rejected - вызываются только на дейтвия прописанные в 1 аргументе функции middleware
    //6-1  создание ассинхфронной функции через middleware
    getCatFact: create.asyncThunk(
      //6-2 написание запроса через аксиас
        async (
            // для получения какой то информации из обьекта, передадим пейлоуд в качестве аргумента
            payload: any) => {
        console.log(payload)
        // В response у нас будет лежать либо ошибка, либо нормальные данные, что именно мы не занем сразу
        let response = await axios.get("https://catfact.ninja/fact")
        // response возвращается в action.payload в fulfilled или rejected
        return response
      },
      // 6-3 прописание редьюсеров, для всех сценариев возврата из сервера
      {
        pending: (state: CatFactSliceState) => {
          state.error = undefined  // очистка предыдущей ошибки
          console.log("Pending")
        },
        fulfilled: (state: CatFactSliceState, action) => {
          state.catFacts = [
            ...state.catFacts,
            { fact: action.payload.data.fact, id: v4() }, // добавление в массив очередного факта
          ]
          console.log("Fulfilled", action)
        },
        rejected: (state: CatFactSliceState, action) => {
          state.error = action.error.message
          console.log("rejected", action)
        },
      },
    ),
    deleteCatFact: create.reducer( // 8-6 удаление факта
      (state: CatFactSliceState, action: PayloadAction<string>) => {
        console.log(action)
        state.catFacts = state.catFacts.filter((catFact: CatFact) => {
          return catFact.id !== action.payload
        })
      },
    ),
  }),
  //4-5 пропишем селекторы + типизацмя
  selectors: {
    catFacts: (state: CatFactSliceState) => state.catFacts,
    error: (state: CatFactSliceState) => state.error,
  },
})

//4-7 прокидывание е4шенов и селекторов
export const catFactsActions = catFactSlice.actions
export const catFactSelectors = catFactSlice.selectors
import { PayloadAction } from "@reduxjs/toolkit"

// ШАГ-1 импорт функции для создания слайсов
import { createAppSlice } from "store/createAppSlice"
// ШАГ-12 импорт типизации для стейта  в каунтерСлайс
import { CounterSliceState } from "./types"

//ШАГ-3 значение для нициализации значений аргумента при создании Слайса, первоначальное значение count =0;
// Прописываем значения по умолчания для count, чтобы потом передать в Global State в reudux store
const counterInitialState :
// ШАГ-13 типизация 
CounterSliceState= {
  count: 0,
}

// ШАГ-2 создание Слайса через вызов импортированой функции, в аргумент ей передаем обьект с обязательными ключами
// ШАГ-6 експорт слайса
export const counterSlice = createAppSlice({

  // name - это имя для slice, имя используется для нахожения событий слайса в redux devtools и для идентификации actions
    name: "COUNTER",

  //ШАГ-4 передача изначального значения для инициализации, значнее по умолчанию для этого slice
  initialState: counterInitialState,

  // ШАГ-5 Добавления функции редьюсера - callBack с аргументом create, который и создает reducers_>>функции, изменяющие состояние counterSlice
  //.....reducers: create =>({})  --> аналог reducers: (create) => {return {}}
  // return -->возврат в виде обьекта
  reducers: (create) => {return {
    // ШАГ-10 прописываем функцию, имя ключю/название аргументам даем сами, колбек функция внутри- изменяет наш Стейт
    // state -аргумент, который передает актуальный стейт в редьюсер
    plus: create.reducer(
       // ШАГ-13 типизация 
        (state: CounterSliceState)=>{
        state.count = state.count +1;
    }),
    minus: create.reducer ((state:CounterSliceState)=>{
        state.count = state.count -1;
    }),
    multiply: create.reducer((state:CounterSliceState, action:PayloadAction<number>)=>{
         // action - это обьект состоязий из 2 св-в
        // 1 - type- строка, тип экшена, по которому у нас вызывется reducer
        // 2 - payload - это данные, которые вы хотите передать из компонента в reducer
        console.log(action.payload)
        state.count = state.count*action.payload;
    }),
    divide: create.reducer((state:CounterSliceState, action:PayloadAction<number>)=>{
        state.count = state.count/action.payload
    })
  }},
  //ШАГ-13/2 организация для возврата - то как мы хотим получить данные  в Компоненте
   // selectors - мы прописываем, какие именно данные мы хотим отдавать компонентам
  selectors: {
    count: (state:CounterSliceState)=>{
        return state.count}
  }
})
// ШАГ-14 Диспатчить екшен – отдать екшен Стору, что бы он вызвал необходимый Редьюсер 
//сounterSlice cам создает actions для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions;

// ШАГ-15 Подписка
// selectors - это данные которые мы будем отдавать компонентам, т.е позволять компонентам подписываться
// на redux store
export const counterSliceSelectors = counterSlice.selectors
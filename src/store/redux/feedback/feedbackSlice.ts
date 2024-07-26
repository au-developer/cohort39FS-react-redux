//ШАГ-1 импорт функции для создания Слайса- среза
import { createAppSlice } from "store/createAppSlice"
//ШАГ-10 импорт Типизации для стейта
import { FeedbackSliceState } from "./types"
//ШАГ-3 значение по умолчанию
const feedbackInitialState: 
//ШАГ-11 типизация СТейта
FeedbackSliceState = {
  feedbackCountLikes: 0,
  feedbackCountDislikes: 0,
}
// ШАГ-2 создание Слайса через вызов импортированой функции с обязательными ключами name
// ШАГ-6 експорт слайса - ШАГ-7,8 в store.ts сделать импорт и передать в аргкмент функции combineSlices
export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  //ШАГ-4 передача изначального значения для инициализации, значнее по умолчанию для этого slice, initialState
  initialState: feedbackInitialState,
  // ШАГ-5 Добавления функции редьюсера - callBack с аргументом create, который и создает reducers_>>функции, изменяющие состояние counterSlice
  reducers: create => {
    return {
      like: create.reducer(
        //ШАГ-11 типизация СТейта
        (state: FeedbackSliceState) => {
          state.feedbackCountLikes = state.feedbackCountLikes + 1
        },
      ),
      dislike: create.reducer(
        //ШАГ-11 типизация СТейта
        (state: FeedbackSliceState) => {
          state.feedbackCountDislikes = state.feedbackCountDislikes - 1
        },
      ),
      resetResult: create.reducer(
        //ШАГ-11 типизация СТейта
        (state: FeedbackSliceState) => {
          state.feedbackCountLikes = 0
          state.feedbackCountDislikes = 0
        },
      ),
    }
  },
  // ШАГ-12 в selectors - мы прописываем, какие именно данные мы хотим отдавать компонентам
  selectors: {
    feedbackCountLikes: (state: FeedbackSliceState) => {
      return state.feedbackCountLikes
    },
    feedbackCountDisLikes: (state: FeedbackSliceState) => {
      return state.feedbackCountDislikes
    },
  },
})

// ШАГ-13 Диспатчить екшен – отдать екшен Стору, что бы он вызвал необходимый Редьюсер
export const feedbackSliceAction = feedbackSlice.actions

// ШАГ-14 Подписка
// selectors - это данные которые мы будем отдавать компонентам, т.е позволять компонентам подписываться
export const feedbackSliceSelectors = feedbackSlice.selectors

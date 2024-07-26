//ШАГ-14 импорт из файла hooks.ts там есть 2 константы
//const useAppDispatch – хук для диспатча екшена, передача екшена стору
//const useAppSelector – хук для подписки на хранилище
import { useAppDispatch, useAppSelector } from "store/hooks"

// ШАГ-16 импорт ПОДПИСКи из counterSlice.ts //ШАГ-18 импорт екшена из файла counterSlice.ts
import {
  feedbackSliceSelectors,
  feedbackSliceAction,
} from "store/redux/feedback/feedbackSlice"
import Feedback from "components/Feedback/Feedback"

import { PageWrapper } from "./styles"

function Homework_16() {
  // ШАГ-15 вызов хуков
  const dispatch = useAppDispatch()
  //ШАГ-17 - передача в хук подписки
  const feedbackCountLikes = useAppSelector(
    feedbackSliceSelectors.feedbackCountLikes,
  )
  const feedbackCountDislikes = useAppSelector(
    feedbackSliceSelectors.feedbackCountDisLikes,
  )

  // ШАГ-18/1 пишем функции для лайка, дизлайка,резета - используем диспатч, в аргумент ему- импортировать необходимый ексшен
  const onLike = () => {
    dispatch(feedbackSliceAction.like())
  }
  const onDislike = () => {
    dispatch(feedbackSliceAction.dislike())
  }
  const makeReset = () => {
    dispatch(feedbackSliceAction.resetResult())
  }

  // Передача значения из Редакса - подписка в лайк дизлайк
  return (
    <PageWrapper>
      <Feedback
        like={feedbackCountLikes}
        dislike={feedbackCountDislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={makeReset}
      />
    </PageWrapper>
  )
}

export default Homework_16

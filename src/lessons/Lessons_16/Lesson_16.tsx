import { useAppDispatch, useAppSelector } from "store/hooks"
import Counter from "components/Counter/Counter"
import {
  counterSliceSelectors,
  counterSliceActions,
} from "store/redux/counter/counterSlice"

import { PageWrapper } from "./styles"

function Lesson_16() {
  // Хук useAppDispatch не принимает в себя аргументы, он просто возвращает нам функцию dispatch,
  // которая передает action в redux store. Потом на переданный action запускается нужный нам reducer
  const dispatch = useAppDispatch()
  // Забираем значения из redux стора, затем передаем значения в нужные места в JSX,
  // такми образом подписываемся на изменения в redux store
  const count = useAppSelector(counterSliceSelectors.count)
  console.log(count)

  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  }

  const onMinus = () => {
    console.log(counterSliceActions.minus())
    // counterSliceActions.minus() - это actionCreator - функция, котрорая возвращает вам action
    // action - это обьект состоязий из 2 св-в
    // 1 - type- строка, тип экшена, по которому у нас вызывется reducer
    // 2 - payload - это данные, которые вы хотите передать из компонента в reducer

    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }
  const onDivide = () => {
    dispatch(counterSliceActions.divide(3))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onDivide={onDivide}
        onMultiply={onMultiply}
        onMinus={onMinus}
        onPlus={onPlus}
      />
    </PageWrapper>
  )
}

export default Lesson_16

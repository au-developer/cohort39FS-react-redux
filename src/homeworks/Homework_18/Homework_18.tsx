import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
import { v4 } from "uuid"

import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  JokeCard,
  RandomJokeContainer,
  JokeText,
  JokeWrapper,
  ButtonControl,
} from "./styles"

// Повторение filter()
// const animals = ["Tiger", "Lion", "Cat", "Dog", "Rat"]
// const animalsWithoutRat = animals.filter((animal: string) => {
//   // Если в return у нас true, то элемент массива, который мы перебираем возвращается в новый массив,
//   // Если false, то не возвращается
//   return animal !== "Rat"
// })

// console.log(animalsWithoutRat)

function Homework_18() {
  const dispatch = useAppDispatch()
  // декомпозиция ответа на запрос
  const { jokes, error, isFetching } = useAppSelector(
    randomJokesSelectors.jokesData,
  )

  const getRandomJoke = () => {
    dispatch(randomJokesActions.getRandomJokes())
  }

  const deleteAllJokes = () => {
    dispatch(randomJokesActions.deleteAllJokes())
  }

  const randomJokes = jokes.map((randomJoke: RandomJoke, index: number) => {
    const deleteJoke = () => {
      dispatch(randomJokesActions.deleteJoke(randomJoke.id))
    }

    return (
      <JokeWrapper key={v4()}>
        <JokeText>{`${index + 1}. ${randomJoke.joke}`}</JokeText>
        <ButtonControl>
          <Button isRed onClick={deleteJoke} name="Delete Joke" />
        </ButtonControl>
      </JokeWrapper>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <JokeCard>
        {jokes.length > 0 && (<Button isRed onClick={deleteAllJokes} name="Delete All Jokes" />
        )}
        <RandomJokeContainer>
          {jokes.length > 0 && randomJokes}
        </RandomJokeContainer>
        <Button
          disabled={isFetching}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </JokeCard>
    </PageWrapper>
  )
}

export default Homework_18

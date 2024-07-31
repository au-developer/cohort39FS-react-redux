import axios from "axios"
import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"

import { RandomJoke, RandomJokeSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const randomJokeInitialState: RandomJokeSliceState = {
  jokes: [],
  error: undefined,
  isFetching: false, // блокировка кнопки до прихода результата
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJokes: create.asyncThunk(
      async () => {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke",
        )

        return response
      },
      {
        pending: (state: RandomJokeSliceState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: RandomJokeSliceState, action) => {
          const jokeData = action.payload.data
          state.jokes = [
            ...state.jokes,
            { joke: `${jokeData.setup} ${jokeData.punchline}`, id: v4() },
          ]
          state.isFetching = false
        },
        rejected: (state: RandomJokeSliceState, action) => {
          state.isFetching = false
          state.error = action.error.message
        },
      },
    ),
    deleteJoke: create.reducer(
      (state: RandomJokeSliceState, action: PayloadAction<string>) => {
        console.log(action.payload)
        state.jokes = state.jokes.filter((joke: RandomJoke) => {
          return joke.id !== action.payload
        })
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokeInitialState),
  }),
  selectors: {
    jokesData: (state: RandomJokeSliceState) => state,
  },
})

export const randomJokesActions = randomJokeSlice.actions

export const randomJokesSelectors = randomJokeSlice.selectors

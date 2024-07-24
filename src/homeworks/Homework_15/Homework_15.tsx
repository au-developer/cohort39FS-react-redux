import { useState } from "react"

import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { PageWrapper, FormWrapper, CounterWrapper } from "./styles"

function Homework_15() {
  const [count, setCount] = useState<number>(0)
  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1
    })
  }

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1
    })
  }

  return (
    <PageWrapper>
      <FormWrapper>
        <Input id="input-id" label="Search field" name="nameVALUE" />
        <Button name="Search" type="submit" />
      </FormWrapper>
      <CounterWrapper>
        <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      </CounterWrapper>
    </PageWrapper>
  )
}

export default Homework_15

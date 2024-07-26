import Button from "components/Button/Button";

import { CounterWrapper, ButtonControl, Count } from "./styles";
import { CounterProps } from "./types";

function Counter({ count, onPlus, onMinus, onDivide, onMultiply  }: CounterProps) {



  
  return (
    <CounterWrapper>
    <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;

import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCount,
  Count,
} from "./styles";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCount>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCount>
        <ButtonWithCount>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCount>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;

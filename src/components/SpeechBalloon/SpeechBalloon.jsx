import { SpeechBubbleRect, P, Span } from "./SpeechBalloon.styled";

const SpeechBalloon = () => {
  return(
    <SpeechBubbleRect>
      <P>Привет! Для начала работы внеси текущий баланс своего счета!</P>
      <Span>Ты не можешь тратить деньги пока
      их у тебя нет</Span>
    </SpeechBubbleRect>
  )
}

export default SpeechBalloon
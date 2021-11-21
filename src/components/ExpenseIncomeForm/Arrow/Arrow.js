import { MyArrow } from './Arrow.styled';

const Arrow = ({ onClick, onFocus, path }) => {
  return (
    <MyArrow
      width="12"
      height="7"
      fill="none"
      onClick={onClick}
      onFocus={onFocus}
    >
      <path d={path} stroke="#C7CCDC" strokeWidth="2" />
    </MyArrow>
  );
};

export default Arrow;

import sprite from '../images/sprite.svg';

export const Icon = ({ name, color, size, viewBox }) => {
  return (
    <svg
      style={{ position: 'absolute' }}
      width={size}
      fill={color}
      viewBox={viewBox}
    >
      <use href={sprite + `#${name}`} />
    </svg>
  );
};

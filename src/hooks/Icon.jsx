import sprite from '../images/sprite.svg';

export const Icon = ({ name, color, size, viewBox, margin }) => {
  return (
    <svg width={size} fill={color} viewBox={viewBox} margin={margin}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};

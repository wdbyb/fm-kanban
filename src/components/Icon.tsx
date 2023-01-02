import sprite from '/sprite.svg';

export interface IconProps {
  width: string;
  height: string;
  name: string;
}

const Icon = ({ width, height, name }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use href={sprite + name} />
    </svg>
  );
};

export default Icon;

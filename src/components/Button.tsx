import React, { ReactElement, ReactNode } from 'react';
import { IconProps } from './Icon';

interface stylesOptions {
  large: string;
  medium: string;
  primary: string;
  secondary: string;
  destructive: string;
}

interface ButtonProps {
  size: keyof stylesOptions;
  type: keyof stylesOptions;
  classes?: string;
  children?: ReactNode;
  icon?: ReactElement<IconProps>;
}

const Button = ({ classes, children, icon, size, type }: ButtonProps) => {
  const styles = {
    large: 'py-4 px-6 text-headingM',
    medium: 'py-2 px-4 text text-bodyM',
    primary: 'bg-purple text-white hover:bg-purpleHover',
    secondary: 'bg-purple bg-opacity-10 text-purple hover:bg-opacity-25',
    destructive: 'text-white bg-red hover:bg-redHover',
  };

  const clonedIcon = React.cloneElement(icon as ReactElement<IconProps>, {
    width: icon?.props.width,
    height: icon?.props.height,
    name: icon?.props.name,
  });

  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-3xl font-bold text-center transition ${styles[size]} ${styles[type]} ${classes}`}
    >
      {icon ? <span>{clonedIcon}</span> : null}
      {children ? <span>{children}</span> : null}
    </button>
  );
};

export default Button;

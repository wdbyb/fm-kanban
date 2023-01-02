import { useState } from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
}

const Checkbox = ({ id, name, checked = false }: CheckboxProps) => {
  const styles = {
    light: {
      label: 'text-black bg-lightGray hover:bg-purple hover:bg-opacity-25',
      input: '',
    },
  };

  const [isCheck, setIsCheck] = useState(checked);

  return (
    <label
      className={`flex items-center w-full max-w-sm p-3 px-6 rounded-md text-bodyM cursor-pointer focus:ring-0 ${
        styles['light'].label
      } ${isCheck ? 'line-through text-opacity-50' : ''}`}
    >
      <input
        className={`rounded-sm checked:text-purple cursor-pointer ${styles['light'].input}`}
        type="checkbox"
        name={name}
        id={id}
        checked={isCheck}
        onChange={() => setIsCheck(!isCheck)}
      />
      <span className="ml-4">Text</span>
    </label>
  );
};

export default Checkbox;

import { useState } from 'react';

interface InputTextProps {
  placeholder?: string;
  value?: string;
}

const InputText = ({
  placeholder = 'Enter task name',
  value = '',
}: InputTextProps) => {
  const [taskName, setTaskName] = useState(value);
  const errStyles = !taskName.length ? 'border-red' : '';

  return (
    <label className={`w-full`}>
      <input
        className={`w-full p-2 px-4 rounded-md border border-slate-300 placeholder:text-black/25 focus:ring-0`}
        type="text"
        placeholder={placeholder}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </label>
  );
};

export default InputText;

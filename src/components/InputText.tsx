import { useState } from 'react';

const InputText = () => {
  const [taskName, setTaskName] = useState('');
  const errStyles = !taskName.length ? 'border-red' : '';

  return (
    <label>
      <input
        className={`w-full p-2 px-4 rounded-md border border-slate-300 placeholder:text-black/25 focus:ring-0`}
        type="text"
        placeholder="Enter task name"
        name=""
        id=""
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </label>
  );
};

export default InputText;

import { useState } from 'react';
import TaskSection from './TaskSection';
import InputText from './InputText';
import Button from './Button';
import { Task } from '../interfaces';
import Icon from './Icon';

interface TaskEditProps {
  onClose: () => void;
  task: Task;
}

const TaskEdit = ({ onClose, task }: TaskEditProps) => {
  const { title, description, status, subtasks } = task;

  const [desc, setDesc] = useState(description);

  return (
    <>
      <div className="flex items-center gap-2 text-headingL">
        <span>Edit Task</span>
      </div>
      <TaskSection title="Title">
        <InputText value={title} />
      </TaskSection>
      <TaskSection title="Description">
        <textarea
          className={`w-full p-2 px-4 rounded-md border border-slate-300 placeholder:text-black/25 focus:ring-0 resize-none`}
          cols={30}
          rows={5}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </TaskSection>
      <TaskSection title="Subtasks">
        {subtasks.map((subtask, index) => {
          return (
            <div className="flex items-center gap-4" key={index}>
              <InputText value={subtask.title} />
              <button
                onClick={() => console.log('This is subtask number', index)}
                type="button"
              >
                <Icon width="24" height="24" name="#icon-cross" />
              </button>
            </div>
          );
        })}
        <Button size="medium" type="secondary">
          Add New Subtask
        </Button>
      </TaskSection>
      <TaskSection title="Status"></TaskSection>
      <Button onClick={onClose} size="medium" type="primary">
        Edit Task
      </Button>
    </>
  );
};

export default TaskEdit;

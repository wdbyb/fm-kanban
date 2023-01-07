import { useState } from 'react';
import Popup from './Popup';
import TaskView from './TaskView';
import TaskEdit from './TaskEdit';
import BoardNew from './BoardNew';
import BoardEdit from './BoardEdit';
import TaskDelete from './TaskDelete';

import { Task, Subtask } from '../interfaces';

interface TaskCardProps {
  id?: number;
  task: Task;
}

const TaskCard = ({ id, task }: TaskCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, subtasks } = task;

  const completedSubtasks = task.subtasks.filter(
    (task: Subtask) => task.isCompleted
  );

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-2 w-72 p-4 py-6 bg-white rounded-lg shadow-md"
      type="button"
    >
      <div className="text-headingM">{title}</div>
      <div className="text-bodyM text-mediumGray">{`${completedSubtasks.length} of ${subtasks.length} subtasks`}</div>
      {isOpen ? (
        <Popup open={isOpen} onClose={() => setIsOpen(false)}>
          <TaskView onClose={() => setIsOpen(false)} task={task} />
        </Popup>
      ) : null}
    </button>
  );
};

export default TaskCard;

import { useState, useEffect } from 'react';
import Icon from './Icon';
import Checkbox from './Checkbox';
import TaskSection from './TaskSection';
import Popup from './Popup';
import TaskEdit from './TaskEdit';
import { Task, Subtask } from '../interfaces';

interface TaskViewProps {
  onClose: () => void;
  task: Task;
}

const TaskView = ({ onClose, task }: TaskViewProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { title, description, status, subtasks } = task;

  const completedSubtasks = subtasks.filter(
    (task: Subtask) => task.isCompleted
  );

  return (
    <>
      {isEdit ? (
        <TaskEdit onClose={() => setIsEdit(false)} task={task} />
      ) : (
        <>
          <div className="flex items-center gap-2 text-headingL">
            <span>{title}</span>
            <button
              onClick={() => {
                setIsEdit(true);
              }}
              className="flex items-center justify-center w-4"
            >
              <Icon width="4" height="16" name="#icon-vertical-ellipsis" />
            </button>
          </div>
          <div className="text-bodyL text-mediumGray">{description}</div>
          <TaskSection
            title={`Subtasks (${completedSubtasks.length} of ${subtasks.length})`}
          >
            {subtasks.map((subtask, index) => {
              return (
                <Checkbox
                  id={`task-${index}`}
                  name={`task-${index}`}
                  title={subtask.title}
                  checked={subtask.isCompleted}
                  key={index}
                />
              );
            })}
          </TaskSection>
          <div>
            <TaskSection title="Current Status">{status}</TaskSection>
          </div>
        </>
      )}
    </>
  );
};

export default TaskView;

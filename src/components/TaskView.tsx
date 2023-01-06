import Icon from './Icon';
import Checkbox from './Checkbox';
import TaskSection from './TaskSection';

interface TaskViewProps {
  onClose: () => void;
}

const TaskView = ({ onClose }: TaskViewProps) => {
  return (
    <>
      <div className="flex items-center gap-2 text-headingL">
        <span>
          Research pricing points of various competitors and trial different
          business models
        </span>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-4"
        >
          <Icon width="4" height="16" name="#icon-vertical-ellipsis" />
        </button>
      </div>
      <div className="text-bodyL text-mediumGray">
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </div>
      <TaskSection title="Subtasks (2 of 3)">
        <Checkbox id="task-1" name="task-1" />
        <Checkbox id="task-2" name="task-2" />
        <Checkbox id="task-3" name="task-3" />
      </TaskSection>
      <div>
        <TaskSection title="Current Status"></TaskSection>
      </div>
    </>
  );
};

export default TaskView;

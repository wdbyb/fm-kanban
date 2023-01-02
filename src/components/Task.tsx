import Icon from './Icon';
import Checkbox from './Checkbox';

const Task = () => {
  return (
    <div className="fixed inset-0 z-10 bg-black/50 flex items-center justify-center p-4">
      <div className="flex flex-col gap-4 p-6 bg-white rounded-md">
        <div className="flex items-center gap-2 text-headingL">
          <span>
            Research pricing points of various competitors and trial different
            business models
          </span>
          <button className="flex items-center justify-center w-4">
            <Icon width="4" height="16" name="#icon-vertical-ellipsis" />
          </button>
        </div>
        <div className="text-bodyL text-mediumGray">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </div>
        <div className="flex flex-col">
          <div className="text-bodyM text-mediumGray mb-4">
            {'Subtasks (2 of 3)'}
          </div>
          <div className="flex flex-col gap-2">
            <Checkbox id="task-1" name="task-1" />
            <Checkbox id="task-2" name="task-2" />
            <Checkbox id="task-3" name="task-3" />
          </div>
        </div>
        <div>
          <div className="text-bodyM text-mediumGray mb-4">
            {'Current Status'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

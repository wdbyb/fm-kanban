import Button from './Button';

interface TaskDeleteProps {
  onClose: () => void;
}

const TaskDelete = ({ onClose }: TaskDeleteProps) => {
  const title = 'Platform Launch';

  return (
    <>
      <div className="flex items-center gap-2 text-headingL text-red">
        <span>Delete this task?</span>
      </div>
      <div className="text-bodyL text-mediumGray">
        {`Are you sure you want to delete the ‘${title}’ board? This action
        will remove all columns and tasks and cannot be reversed.`}
      </div>
      <div className="flex flex-col gap-4" onClick={onClose}>
        <Button size="medium" type="destructive">
          Delete
        </Button>
        <Button size="medium" type="secondary">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default TaskDelete;

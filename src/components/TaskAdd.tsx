import TaskSection from './TaskSection';
import InputText from './InputText';
import Button from './Button';

const TaskAdd = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-headingL">
        <span>Add New Task</span>
      </div>
      <TaskSection title="Title">
        <InputText />
      </TaskSection>
      <TaskSection title="Description">
        <InputText />
      </TaskSection>
      <TaskSection title="Subtasks">
        <InputText />
        <InputText />
        <Button size="medium" type="secondary">
          Add New Subtask
        </Button>
      </TaskSection>
      <TaskSection title="Status"></TaskSection>
      <Button size="medium" type="primary">
        Create Task
      </Button>
    </>
  );
};

export default TaskAdd;

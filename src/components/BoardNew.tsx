import TaskSection from './TaskSection';
import InputText from './InputText';
import Button from './Button';

const BoardNew = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-headingL">
        <span>Add New Board</span>
      </div>
      <TaskSection title="Board Name">
        <InputText />
      </TaskSection>
      <TaskSection title="Board Columns">
        <InputText />
        <InputText />
        <Button size="medium" type="secondary">
          Add New Column
        </Button>
      </TaskSection>
      <Button size="medium" type="primary">
        Create New Board
      </Button>
    </>
  );
};

export default BoardNew;

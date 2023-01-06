import TaskSection from './TaskSection';
import InputText from './InputText';
import Button from './Button';

const BoardEdit = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-headingL">
        <span>Edit Board</span>
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
        Save Changes
      </Button>
    </>
  );
};

export default BoardEdit;

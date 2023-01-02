import Button from './Button';
import Icon from './Icon';
import BoardColumn from './BoardColumn';
import Task from './Task';

const Board = () => {
  const isEmpty = false;

  return (
    <div className="relative flex grow gap-6 p-4 py-6 bg-lightGray overflow-x-auto">
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center">
          <div className="text-headingL text-mediumGray text-center mb-6">
            This board is empty. Create a new column to get started.
          </div>
          <Button
            classes="mx-auto"
            type="primary"
            size="large"
            icon={<Icon width="12" height="12" name="#icon-add-task-mobile" />}
          >
            Add New Column
          </Button>
        </div>
      ) : (
        <>
          <BoardColumn />
          <BoardColumn />
          <Task />
        </>
      )}
    </div>
  );
};

export default Board;

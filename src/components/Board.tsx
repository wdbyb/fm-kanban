import Button from './Button';
import Icon from './Icon';
import BoardColumn from './BoardColumn';
import Popup from './Popup';
import TaskView from './TaskView';
import TaskAdd from './TaskAdd';
import TaskEdit from './TaskEdit';
import BoardNew from './BoardNew';
import BoardEdit from './BoardEdit';
import TaskDelete from './TaskDelete';

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
          {/* <BoardColumn /> */}
        </>
      )}
    </div>
  );
};

export default Board;

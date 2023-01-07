import TaskCard from './TaskCard';
import data from '../../data.json';

const BoardColumn = () => {
  const parsedData = JSON.parse(JSON.stringify(data));
  const task = parsedData.boards[0].columns[0].tasks[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-headingS">
        <span className="w-4 h-4 rounded-full bg-purple"></span>
        <span className="text-mediumGray tracking-widest uppercase">
          {'Todo (4)'}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <TaskCard task={task} />
        {/* <TaskCard /> */}
      </div>
    </div>
  );
};

export default BoardColumn;

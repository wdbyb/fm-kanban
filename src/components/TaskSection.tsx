import { ReactNode } from 'react';

interface TaskSectionProps {
  title: string;
  children?: ReactNode;
}

const TaskSection = ({ children, title }: TaskSectionProps) => {
  return (
    <div className="flex flex-col">
      <div className="text-bodyM text-mediumGray mb-2">{title}</div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default TaskSection;

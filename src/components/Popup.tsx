import { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import TaskView from './TaskView';
import TaskAdd from './TaskAdd';
import TaskEdit from './TaskEdit';
import BoardNew from './BoardNew';
import BoardEdit from './BoardEdit';
import TaskDelete from './TaskDelete';

interface PopupProps {
  open: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

const Popup = ({ children, open = false, onClose }: PopupProps) => {
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className={`${
        open ? '' : 'hidden'
      } fixed inset-0 z-10 bg-black/50 flex items-center justify-center p-4`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-6 w-full p-6 bg-white rounded-md"
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Popup;

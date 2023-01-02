import Icon from './Icon';
import Button from './Button';

const Header = () => {
  return (
    <div className="relative z-100 flex items-center p-4">
      <Icon width="24" height="25" name="#logo-mobile" />
      <button className="flex items-center gap-2 ml-4 mr-auto text-headingL">
        <span>Platform Launch</span>
        <span>
          <Icon width="12" height="8" name="#icon-chevron-down" />
        </span>
      </button>
      <div className="flex items-center gap-2">
        <Button
          size="medium"
          type="primary"
          icon={<Icon width="12" height="12" name="#icon-add-task-mobile" />}
        ></Button>
        <button className="flex items-center justify-center w-4">
          <Icon width="4" height="16" name="#icon-vertical-ellipsis" />
        </button>
      </div>
    </div>
  );
};

export default Header;

const TaskCard = () => {
  return (
    <button
      className="flex flex-col gap-2 w-72 p-4 py-6 bg-white rounded-lg shadow-md"
      type="button"
    >
      <div className="text-headingM">Build UI for onboarding flow</div>
      <div className="text-bodyM text-mediumGray">0 of 3 substasks</div>
    </button>
  );
};

export default TaskCard;

import Button from "../../common/Button";

const TaskDetail = ({ tasks }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-bold">Tasks</h2>
        <Button text="+ Add Task" type="button" />
      </div>
      {tasks.map((task) => (
        <div>
          <span>{`${task.text} (${count})`}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskDetail;

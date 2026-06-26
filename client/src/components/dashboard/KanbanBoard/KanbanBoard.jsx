import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  const boardData = {
    todo: [
      {
        id: 1,
        title: "Landing Page Design",
        dueDate: "Due Tomorrow",
      },
      {
        id: 2,
        title: "Mobile Layout",
      },
    ],

    inProgress: [
      {
        id: 3,
        title: "Dashboard UI",
        progress: 75,
      },
    ],

    review: [
      {
        id: 4,
        title: "Authentication Flow",
      },
    ],

    done: [
      {
        id: 5,
        title: "Project Setup",
      },
      {
        id: 6,
        title: "Database Design",
      },
    ],
  };
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <KanbanColumn
        title="To Do"
        color="text-white"
        tasks={boardData.todo}
      />

      <KanbanColumn
        title="In Progress"
        color="text-yellow-400"
        tasks={boardData.inProgress}
      />

      <KanbanColumn
        title="Review"
        color="text-cyan-400"
        tasks={boardData.review}
      />

      <KanbanColumn
        title="Done"
        color="text-green-400"
        tasks={boardData.done}
      />
    </div>
  );
};

export default KanbanBoard;

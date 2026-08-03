import { useState } from "react";
const ProjectAssignees = ({ users = [], dueDate }) => {
  const MinDeveloper = users.slice(0, 3);
  const rem = users.length - MinDeveloper.length;

  return (
    <div className="mt-8 flex items-center justify-between gap-2 pb-1">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {MinDeveloper.map((member) => (
            <img
              key={member.id}
              className="w-8 h-8 rounded-full border border-white object-cover"
              src={member.avatar}
              alt={member.name}
              title={member.name}
            />
          ))}
        </div>
        {users.length > 3 && <span className="text-2xl font-medium">+{rem}</span>}
      </div>
      <p>{dueDate}</p>
    </div>
  );
};

export default ProjectAssignees;

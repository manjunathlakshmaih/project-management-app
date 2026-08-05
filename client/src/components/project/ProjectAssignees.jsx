import { useState } from "react";
const ProjectAssignees = ({
  className,
  users = [],
  dueDate,
  drawerMembers = false,
}) => {
  const displayCount = drawerMembers ? 5 : 3;
  const MinDeveloper = users.slice(0, displayCount);
  const rem = users.length - MinDeveloper.length;

  return (
    <div
      className={`flex items-center justify-between gap-1 pb-1 ${className}`}
    >
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
        {drawerMembers ? users.length > 5 : users.length > 3 && (
          <span className="text-base font-medium">+{rem}</span>
        )}
      </div>
      {!drawerMembers && (<p>{dueDate}</p>)}
    </div>
  );
};

export default ProjectAssignees;

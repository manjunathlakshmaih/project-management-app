const ProjectTabs = ({ onTabChange = () => {} }) => {
  const tabs = ["Overview", "Tasks", "Team", "Files", "Activity"];

  return (
    <nav className="flex border-b-2 border-slate-700  mb-4 px-1">
      <ul className="flex flex-row justify-between w-full list-image-none cursor-pointer">
        {tabs.map((list, id) => (
          <li
            key={id}
            className="pb-1 text-shadow-lg font-medium hover:border-b-2 border-blue-400 hover:opacity-40 active:border-blue-400"
            onClick={() => onTabChange(list)}
          >
            {list}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectTabs;

const ProjectTabs = ({ navList, onClick = () => {} }) => {
  return (
    <nav className="flex mt-7 border-b-1 border-slate-700  mb-7">
      <ul className="flex flex-row justify-between w-full list-image-none cursor-pointer">
        {navList.map((list, id) => (
          <li
            key={id}
            className="pb-1 text-shadow-lg font-medium hover:border-b-2 border-blue-400 hover:opacity-40 active:border-blue-400"
            onClick={() => onClick(list)}
          >
            {list}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectTabs;
import view from "../../assets/view.svg";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";

const ProjectActions = ({ onView, onEdit, onDelete, className = "" }) => (
  <div role="group" className={`flex items-center justify-between mt-6 ${className}`}>
    <button type="button" onClick={() => onView?.()} aria-label="View" className="flex items-center gap-1 cursor-pointer">
      <img src={view} alt="" aria-hidden="true" />
      <span>View</span>
    </button>

    <button type="button" onClick={onEdit} aria-label="Edit" className="flex items-center gap-1 cursor-pointer">
      <img src={edit} alt="" aria-hidden="true" />
      <span>Edit</span>
    </button>

    <button type="button" onClick={onDelete} aria-label="Delete" className="flex items-center gap-1 cursor-pointer">
      <img src={remove} alt="" aria-hidden="true" />
      <span>Delete</span>
    </button>
  </div>
);

export default ProjectActions;
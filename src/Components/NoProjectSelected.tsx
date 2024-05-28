import { Link } from "react-router-dom";

export function NoProjectSelected() {
  return (
    <div className="no-project-selected">
      <img src="src/assets/no-projects.png" alt="Logo" />
      <h3>No Project Selected</h3>
      <p>Select a project or get started with a new one</p>
      <Link to={"/CreateProject"}>
        <button>Create new project</button>{" "}
      </Link>
    </div>
  );
}

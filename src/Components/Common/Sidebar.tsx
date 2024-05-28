import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../../Providers/ProjectProvider";

export function Sidebar() {
  const { allProjects } = useContext(ProjectContext);

  return (
    <aside>
      <h3>YOUR PROJECTS</h3>
      <Link to={"/CreateProject"}>
        <button>+ Add Project</button>
      </Link>
      <ul>
        {allProjects.map((project, id) => (
          <li key={id}>
            <Link to={`/EditProject/${project.id}`}>
              <p>{project.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

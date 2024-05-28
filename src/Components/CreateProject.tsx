import { Link } from "react-router-dom";
import { IProject } from "../Types/IProjects";
import { useState, ChangeEvent, useContext } from "react";
import { ProjectContext } from "../Providers/ProjectProvider";

export function CreateProject() {
  const { allProjects, setAllProjects } = useContext(ProjectContext);
  const [project, setProject] = useState<IProject>({
    id: Date.now(),
    title: "",
    description: "",
    dueDate: "",
    tasks: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProjects = [...allProjects, project];
    setAllProjects(updatedProjects);
  };

  return (
    <div className="create-project-container">
      <form className="create-project-form" onSubmit={handleSubmit}>
        <div className="create-project-buttons">
          <Link to={"/"}>
            <button id="cancel">Cancel</button>
          </Link>
          <button type="submit"> Save </button>
        </div>
        <label htmlFor="title">TITLE</label>
        <input type="text" name="title" onChange={handleChange} />

        <label htmlFor="description">DESCRIPTION</label>
        <textarea name="description" onChange={handleChange}></textarea>

        <label htmlFor="dueDate">DUE DATE</label>
        <input type="date" name="dueDate" onChange={handleChange} />
      </form>
    </div>
  );
}

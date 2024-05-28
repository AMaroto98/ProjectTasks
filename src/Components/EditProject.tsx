import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { IProject } from "../Types/IProjects";
import { ITask } from "../Types/ITask";
import { formatDate } from "../Services/Logic";
import { ProjectContext } from "../Providers/ProjectProvider";

export function EditProject() {
  const { id } = useParams<{ id: string }>();
  const idNumber = Number(id);

  const { getProjectById, deleteProjectById, getAllTasksForProject } =
    useContext(ProjectContext);

  const [actualProject, setActualProject] = useState<IProject | null>(() => {
    return getProjectById(idNumber);
  });

  const [tasksActualProject, setTasksActualProject] = useState<ITask[] | null>(
    () => {
      return getAllTasksForProject(idNumber);
    }
  );

  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  const handleDeleteProject = () => {
    deleteProjectById(idNumber);
  };

  const handleAddTask = () => {
    if (actualProject && newTaskDescription !== "") {
      const newTask: ITask = {
        id: Date.now(),
        description: newTaskDescription,
      };
      setTasksActualProject((prevTasks) => [...(prevTasks || []), newTask]);
      setNewTaskDescription("");
    }
  };

  const handleDeleteTask = (taskId: number) => {
    if (tasksActualProject) {
      const updatedTasks = tasksActualProject.filter(
        (task) => task.id !== taskId
      );
      setTasksActualProject(updatedTasks);

      if (actualProject) {
        const updatedProject = {
          ...actualProject,
          tasks: updatedTasks,
        };
        setActualProject(updatedProject);
      }
    }
  };

  return (
    <div>
      {actualProject ? (
        <>
          <div className="edit-project-container">
            <div className="edit-project-header">
              <h2>{actualProject.title}</h2>
              <Link to={"/"}>
                <button id="delete" onClick={handleDeleteProject}>
                  Delete
                </button>
              </Link>
            </div>
            <div className="edit-project-information">
              <p id="date">{formatDate(actualProject.dueDate)}</p>
              <p>{actualProject.description}</p>
            </div>
            <hr />
            <h2>Tasks</h2>
            <div className="edit-project-add-tasks">
              <input
                type="text"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
              <button onClick={handleAddTask}>Add Task</button>
            </div>

            {tasksActualProject?.map((task) => (
              <div key={task.id} className="edit-project-clear-tasks">
                <div className="edit-project-clear-tasks-text">
                  <p>{task.description}</p>
                </div>
                <button onClick={() => handleDeleteTask(task.id)}>Clear</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="edit-project-not-found">
          <h3>Project not found</h3>
        </div>
      )}
    </div>
  );
}

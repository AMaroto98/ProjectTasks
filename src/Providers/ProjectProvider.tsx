import { createContext, useState } from "react";
import { IProjectProvider } from "../Types/IProjectProvider";
import { IProject } from "../Types/IProjects";
import { IProjectContext } from "../Types/IProjectContext";
import { ITask } from "../Types/ITask";

export const ProjectContext = createContext<IProjectContext>({
  allProjects: [],
  setAllProjects: () => {},
  getProjectById: () => null,
  deleteProjectById: () => {},
  getAllTasksForProject: () => null,
});

export function ProjectProvider({ children }: IProjectProvider) {
  const [allProjects, setAllProjects] = useState<IProject[]>([]);

  const getProjectById = (projectId: number) => {
    return allProjects.find((project) => project.id === projectId) || null;
  };

  const deleteProjectById = (projectId: number) => {
    const updatedProjects =
      allProjects.filter((project) => project.id !== projectId) || null;
    setAllProjects(updatedProjects);
  };

  const getAllTasksForProject = (projectId: number): ITask[] => {
    const project = getProjectById(projectId);
    return project ? project.tasks || [] : [];
  };

  return (
    <ProjectContext.Provider
      value={{
        allProjects,
        setAllProjects,
        getProjectById,
        deleteProjectById,
        getAllTasksForProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

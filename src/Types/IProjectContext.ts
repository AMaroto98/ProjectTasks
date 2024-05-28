import { Dispatch, SetStateAction } from "react";
import { IProject } from "./IProjects";
import { ITask } from "./ITask";

export interface IProjectContext {
  allProjects: IProject[];
  setAllProjects: Dispatch<SetStateAction<IProject[]>>;
  getProjectById: (projectId: number) => IProject | null;
  deleteProjectById: (projectId: number) => void;
  getAllTasksForProject: (projectId: number) => ITask[] | null;
}

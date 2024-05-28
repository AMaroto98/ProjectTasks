import { ITask } from "./ITask";
export interface IProject {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  tasks: ITask[];
}

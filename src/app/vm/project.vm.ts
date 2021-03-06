import { TaskListVM } from './task-list.vm';
import { User } from '../domain/user';

export interface ProjectVM {
  id: string | null;
  name: string;
  desc?: string;
  coverImg?: string;
  enabled?: boolean;
  taskLists?: TaskListVM[];
  members?: User[];
}

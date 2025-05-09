import { getAll, getOne } from "./projects/get";

export function useProjects() {
  return {
    getAll,
    getOne,
  };
}

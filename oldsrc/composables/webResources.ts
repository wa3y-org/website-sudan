import {
  getAllWebResources,
  getOneWebResource,
  getWebResourcesByTag,
} from "./website/resources/get";

export function useWebResources() {
  return {
    get: {
      all: getAllWebResources,
      byId: getOneWebResource,
      byTag: getWebResourcesByTag,
    },
  };
}

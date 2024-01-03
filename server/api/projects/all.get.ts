import { useFetchException } from "~/composables/exception/useFetchException";
import { useResult } from "~/composables/useFetchResult";
import prisma from "~/prisma/client";

export default defineEventHandler((event) => {
  try {
    const projects = prisma.projects.findMany();
    return useResult(projects);
  } catch (error) {
    return useFetchException(error, 40002);
  }
});

import { useFetchException } from "~/composables/exception/useFetchException";
import { useResult } from "~/composables/useFetchResult";
import prisma from "~/prisma/client";

export default defineEventHandler((event) => {
  const params = Number(getRouterParams(event));
  // if (!id) return useFetchException("请传入项目ID", 40001);

  try {
    const project = prisma.projects.findMany({
      where: {
        createAt: {
          gte: "2024-01-03",
          lte: "2024-12-31",
        },
      },
    });
    return useResult(project);
  } catch (error) {
    return useFetchException(error, 40002);
  }
});

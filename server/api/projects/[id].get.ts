import { useFetchException } from '~/composables/exception/useFetchException';
import { useResult } from '~/composables/useFetchResult';
import prisma from '~/prisma/client';

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'));
  if (!id) return useFetchException('请传入项目ID', 40001);

  try {
    const project = prisma.projects.findUnique({ where: { id } });
    return useResult(project);
  } catch (error) {
    return useFetchException(error, 40002);
  }
});

import { useFetchException } from '~/composables/exception/useFetchException';
import { useResult } from '~/composables/useFetchResult';
import prisma from '~/prisma/client';

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'));
  if (!id) return useFetchException(`请传入用户 ID`, 40001);

  try {
    const user = prisma.users.findUnique({ where: { id } });

    return useResult(user);
  } catch (error) {
    return useFetchException(error, 40002);
  }
});

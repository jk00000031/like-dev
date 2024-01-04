import { useFetchException } from '~/composables/exception/useFetchException';
import { useResult } from '~/composables/useFetchResult';
import { useCurrentYear } from '~/composables/utils/date/useDate';
import prisma from '~/prisma/client';

export default defineEventHandler((event) => {
  let { start, end } = getRouterParams(event);
  start = start || `${useCurrentYear()}-01-01`;
  end = end || `${useCurrentYear()}-12-31`;

  try {
    const project = prisma.books.findMany({
      where: {
        createAt: {
          gte: start,
          lte: end
        }
      }
    });
    return useResult(project);
  } catch (error) {
    return useFetchException(error, 40002);
  }
});

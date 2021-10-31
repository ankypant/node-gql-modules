import { tvSeries } from '../../mocks/mock.data';

export const tvSeriesResolver = {
  Query: {
    tvSeries: () => tvSeries
  }
};

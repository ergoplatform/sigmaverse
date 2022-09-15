import qs from 'qs';
import { websiteBackendApi } from './axios';
import { LANDING_CAROUSEL_ITEMS } from './methods';

export const getCarouselItems = async () => {
  try {
    const query = qs.stringify({
      populate: '*',
    });
    return websiteBackendApi.get(`${LANDING_CAROUSEL_ITEMS}?${query}`).then((res) => res.data);
  } catch {
    return null;
  }
};

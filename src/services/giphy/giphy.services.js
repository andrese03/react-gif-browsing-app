import axios from 'axios';
import { isTesting } from '../../utils/env';
import { searchResult } from './giphy.mocks';
import { GIPHY_HOST, GIPHY_API_KEY, GIPHY_SEARCH } from './giphy.constants';

const searchGIFS = async (search, limit = 25, offset = 0) => {
  const method = 'GET';
  const url = `${GIPHY_HOST}${GIPHY_SEARCH}`;
  // Search params
  const params = {
    api_key: GIPHY_API_KEY,
    q: search,
    limit,
    offset,
  };

  // Mock function for testing purposes
  if (isTesting()) {
    return searchResult;
  }

  try {
    const result = await axios({
      method,
      url,
      params,
    });

    const { data } = result;

    return data;
  } catch (e) {
    throw new Error('Something went wrong while getting your GIFs. :(');
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  searchGIFS,
};

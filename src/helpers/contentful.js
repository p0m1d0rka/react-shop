import { baseUrl, productSpace, accessToken, environment  } from '../constants/contentful.js';

export const productsPath = () => `${baseUrl}/spaces/${productSpace}/environments/${environment}/entries?access_token=${accessToken}`;
export const assetsPath = () => `${baseUrl}/spaces/${productSpace}/environments/${environment}/assets?access_token=${accessToken}`;

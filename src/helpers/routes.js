import { baseUrl, productSpace, accessToken, environment  } from '../constants/contentful.js';

export const rootPath = () => '/';
export const catalogPath = () => '/catalog';
export const productPath = (id=':id') => `/product/${id}`;
export const cartPath = () => '/cart';
export const contactPath = () => '/contacts';
export const productsPath = () => `${baseUrl}/spaces/${productSpace}/environments/${environment}/entries?access_token=${accessToken}`;
export const assetsPath = () => `${baseUrl}/spaces/${productSpace}/environments/${environment}/assets?access_token=${accessToken}`;

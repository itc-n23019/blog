import { createClient } from 'microcms-js-sdk';

export function getClient() {
  return createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
  });
}


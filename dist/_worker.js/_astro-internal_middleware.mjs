globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_D5DHPnMk.mjs';
import './chunks/astro/server_DSg_L672.mjs';
import { s as sequence } from './chunks/index_CzkJ7qV4.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };

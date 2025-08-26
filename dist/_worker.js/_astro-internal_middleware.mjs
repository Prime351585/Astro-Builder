globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_5UqZ_RPR.mjs';
import './chunks/astro/server_D_orNtTN.mjs';
import { s as sequence } from './chunks/index_W13UBKlk.mjs';

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

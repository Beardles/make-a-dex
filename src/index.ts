import { Elysia } from 'elysia';
import * as handlers from './handlers';

const app = new Elysia()
  .onStart(() => console.log('SUP'))
  .get('/', handlers.Home)
  .get('/pokemon', handlers.Pokemon)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

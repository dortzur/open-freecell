import { schema } from 'normalizr';

export const cardsSchema = new schema.Entity('cards');

export default { deck: [cardsSchema] };

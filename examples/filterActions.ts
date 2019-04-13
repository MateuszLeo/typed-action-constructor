import { createAction } from '../src';

export const FILTER_TODOS = 'FILTER_TODOS'
export const filterTodos = createAction<typeof FILTER_TODOS, { filter: string }>(FILTER_TODOS)

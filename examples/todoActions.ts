import { createAction } from '../src';

export const FETCH_TODOS = 'FETCH_TODOS'
export const fetchTodos = createAction(FETCH_TODOS)

export const DELETE_TODOS = 'DELETE_TODOS'
export const deleteTodo = createAction<typeof DELETE_TODOS, { id: number }>(DELETE_TODOS)

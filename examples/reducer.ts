import { FETCH_TODOS, DELETE_TODOS } from './todoActions';
// import { FILTER_TODOS } from './filterActions';

import { RootAction } from './rootAction';

export function reducer(state: any, action: RootAction) {
    switch (action.type) {
        // case FILTER_TODOS: // -> error
        // return 'error';
        case FETCH_TODOS:
            return {
                ...state,
                loading: true,
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
            };
        default:
            return null;
    }
}

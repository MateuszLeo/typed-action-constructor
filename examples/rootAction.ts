import { ActionType } from '../src'

import * as todoActions from './todoActions';
// import * as filterActions from './filterActions';

export type RootAction =
    | ActionType<typeof todoActions>
    // | ActionType<typeof filterActions>

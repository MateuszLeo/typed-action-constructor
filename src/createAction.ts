import { ActionCreatorFactory } from './ActionCreatorFactory';

export function createAction<Type extends string, Payload = undefined>(
    type: Type,
): ActionCreatorFactory<Type, Payload> {
    return ((payload?: Payload) => (payload ? { type } : { type, payload })) as any;
}

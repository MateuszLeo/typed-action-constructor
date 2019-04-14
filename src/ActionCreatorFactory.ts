import { ActionWithPayload } from './ActionWithPayload';
import { ActionWithoutPayload } from './ActionWithoutPayload';

type EmptyActionCreator<Type extends string> = () => ActionWithoutPayload<Type>;

type PayloadActionCreator<Type extends string, Payload> = (payload: Payload) => ActionWithPayload<Type, Payload>;

export type ActionCreatorFactory<Type extends string, Payload> = Payload extends undefined
    ? EmptyActionCreator<Type>
    : PayloadActionCreator<Type, Payload>;

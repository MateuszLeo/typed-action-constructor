import { ActionWithPayload } from './ActionWithPayload';
import { ActionWithoutPayload } from './ActionWithoutPayload';

type EmptyAction<Type extends string> = () => ActionWithoutPayload<Type>

type PayloadAction<Type extends string, Payload> = (payload: Payload) => ActionWithPayload<Type, Payload>

export type ActionFactory<Type extends string, Payload> =
    Payload extends undefined
    ? EmptyAction<Type>
    : PayloadAction<Type, Payload>
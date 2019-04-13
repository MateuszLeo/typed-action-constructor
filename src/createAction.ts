import { ActionFactory } from './ActionFactory'

export function createAction<Type extends string, Payload = undefined>(type: Type): ActionFactory<Type, Payload> {
    const builder = (payload?: Payload) => {
        if (!payload) {
            return { type }
        }

        return {
            type,
            payload,
        }
    }

    return builder as any
}
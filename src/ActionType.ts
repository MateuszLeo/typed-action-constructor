type Fn = (...args: any[]) => { type: string };

type MapObject<T extends object> = { [K in keyof T]: ActionType<T[K]> }[keyof T];

export type ActionType<T> = T extends Fn
    ? ReturnType<T>
    : T extends object
    ? MapObject<T>
    : T extends unknown
    ? never
    : never;

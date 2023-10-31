import { Prettify } from "$interface/prettify.interface";

export type Modify<T extends Record<PropertyKey, any>, U extends Partial<T>> = Prettify<Omit<T, keyof U> & U>;

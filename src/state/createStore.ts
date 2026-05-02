import {type MapStore, map} from "nanostores";

type StoreFunction = (...args: unknown[]) => unknown;

type StoreState<S> = {
  [K in keyof S as S[K] extends StoreFunction ? never : K]: S[K];
};

type StoreActions<S> = {
  [K in keyof S as S[K] extends StoreFunction ? K : never]: S[K];
};

type SetFunction<T> = (
  partial: Partial<T> | ((state: T) => Partial<T>),
) => void;

type Store<T> = MapStore<StoreState<T>> &
  StoreState<T> &
  StoreActions<T> & {
    default: StoreState<T>;
  };

export function create<T extends Record<string, unknown>>(
  construct: (set: SetFunction<T>) => T,
): Store<T> {
  const store: Store<T> = map({} as StoreState<T>) as Store<T>;

  const set: SetFunction<T> = partial => {
    store.set({
      ...store.get(),
      ...(typeof partial === "function" ? partial(store.get() as T) : partial),
    });
  };

  const entries = Object.entries(construct(set));
  const initial_state = Object.fromEntries(
    entries.filter(([_, value]) => typeof value !== "function"),
  ) as StoreState<T>;
  const actions = Object.fromEntries(
    entries.filter(([_, value]) => typeof value === "function"),
  ) as StoreActions<T>;

  store.set(initial_state);
  Object.assign(store, actions);

  store.default = initial_state;

  Object.keys(initial_state).forEach(key => {
    Object.defineProperty(store, key, {
      get: () => store.get()[key as keyof StoreState<T>],
      configurable: true,
      enumerable: true,
    });
  });

  return store;
}

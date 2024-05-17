import { Context, createContext as createReactContext, Provider, useContext as useReactContext } from 'react';

export interface CreateContextOptions<T> {
  required?: boolean;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  name?: string;
  defaultValue?: T;
}

export type TCreateContextReturn<T> = [Provider<T>, () => T, Context<T>];

function getErrorMessage(hook: string, provider: string) {
  return `Не вижу ${provider}. ${hook} вернул undefined`;
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const { name, required = true, hookName = 'useContext', providerName = 'Provider', errorMessage, defaultValue } = options;

  const createdContext = createReactContext<T | undefined>(defaultValue);

  createdContext.displayName = name;

  function useContext() {
    const context = useReactContext(createdContext);

    if (!context && required) {
      const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [createdContext.Provider, useContext, createdContext] as TCreateContextReturn<T>;
}

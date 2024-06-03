import { ReactNode, createContext, useContext } from "react";
import { ThemeStore } from "./themeStore";
import { TodoStore } from "./todoStore";

let store: RootStore;

export class RootStore {
  themeStore: ThemeStore | null = null;
  todoStore: TodoStore | null = null;
  
  constructor() {
    this.themeStore = new ThemeStore();
    this.todoStore = new TodoStore();
  }
}

const StoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const rootStore = store ?? new RootStore();
   
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
};

export const useRootStore = () => {
  const context = useContext(StoreContext);

  if (context === null) {
    throw new Error("useRootStore must be used within RootStoreProvider")
  }

  return context;
}

export const useTodoStore = () => {
  const rootStore = useRootStore();

  if (rootStore.todoStore === null) {
    throw new Error("TodoStore must be initialized")
  }

  return rootStore.todoStore;
}

export const useThemeStore = () => {
  const rootStore = useRootStore();

  if (rootStore.themeStore === null) {
    throw new Error("ThemeStore must be initialized")
  }

  return rootStore.themeStore;
}
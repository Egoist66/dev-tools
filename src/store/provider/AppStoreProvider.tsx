import {createContext, FC, ReactNode, useContext} from "react";
import {entitySlice} from "../slices/entity-store-mode.ts";
import {store} from "../store.ts";

interface StoreContextValue {

    entityMode: typeof entitySlice

}
const StoreContext = createContext<StoreContextValue | null>(null)



export const useRootStore = (): StoreContextValue => {
    return useContext(StoreContext) as StoreContextValue
}

export const AppStoreProvider: FC<{children: ReactNode, store: StoreContextValue}> = ({children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}
import {createContext, FC, ReactNode, useContext} from "react";
import {entitySlice} from "../slices/entity-store-mode.ts";
import {store} from "../store.ts";
import {entityObjectSlice} from "../slices/entity-store-object.ts";

interface StoreContextValue {

    entityMode: typeof entitySlice
    entityStoreObject: typeof entityObjectSlice

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
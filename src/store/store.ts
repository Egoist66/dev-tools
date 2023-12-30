import {entitySlice} from "./slices/entity-store-mode.ts";
import {entityObjectSlice} from "./slices/entity-store-object.ts";

export class RootStore  {
    entityMode = entitySlice
    entityStoreObject = entityObjectSlice
    
}

export const store = new RootStore()


import {entitySlice} from "./slices/entity-store-mode.ts";

export class RootStore  {
    entityMode = entitySlice
    
}

export const store = new RootStore()


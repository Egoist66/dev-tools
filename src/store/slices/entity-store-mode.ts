import {action, makeAutoObservable, observable} from "mobx";
import {toLS} from "../../utils/LS.ts";

export type EntityStoreModeValues = 'Array' | 'Object' | 'Class' | '' | string
export type EntityStoreOptions = {
    id: string,
    entityName: string
}
class EntityStoreMode {

    entityOptions: Array<EntityStoreOptions> = [

        { id: 'Array', entityName: 'Array' },
        { id: 'Object', entityName: 'Object' },
        { id: 'Class', entityName: 'Class' },
    ]


    @observable
    mode: EntityStoreModeValues = ''

    constructor() {
        makeAutoObservable(this)
        toLS.loadState((parsedData) => {
            this.mode = parsedData.mode

        })

    }

    @action
    setEntityMode = (mode: EntityStoreModeValues) => {
        this.mode = mode
        toLS.saveState(this)
    }
}

export const entitySlice = new EntityStoreMode()
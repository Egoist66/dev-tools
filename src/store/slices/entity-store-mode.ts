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
    mode: EntityStoreModeValues = 'Array'

    constructor() {
        makeAutoObservable(this)
        toLS.loadState('mode',(parsedData) => {
            this.mode = parsedData

        })

    }

    @action
    setEntityMode = (mode: EntityStoreModeValues) => {
        this.mode = mode
        toLS.saveState('mode', this.mode)
    }
}

export const entitySlice = new EntityStoreMode()
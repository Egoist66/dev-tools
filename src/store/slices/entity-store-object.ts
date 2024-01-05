import {action, makeAutoObservable, observable} from "mobx";

interface EntityInputs {
    inputs: Array<InputType>
    data: {[key: string]: string} | {}
    inputCount: number
}
interface InputType {
    key: string
    value: string
}

class EntityStoreObject implements EntityInputs{
    @observable
    inputs = [{key: '', value: ''}]
    @observable
    data = {}

    @observable
    inputCount = 0

    constructor() {
        makeAutoObservable(this)
    }


    @action
    addInput = () => {
        this.inputCount++
        this.inputs = [...this.inputs, {key: '', value: ''}];
    };

    @action
    removeInput = (index: number, key: string) => {
        this.inputCount--
        this.inputs = this.inputs.filter((_, i) => {
            return i !== index
        })

        // @ts-ignore
        delete this.data[key]

    }

    @action
    handleChange = (index: number, key: string, value: string) => {
        const newInputs = [...this.inputs];
        newInputs[index] = {key, value};
        this.inputs = newInputs
    };

    @action
    handleGenerateJson = () => {
        const data: any = {};
        this.inputs.forEach((input) => {
            data[input.key] = input.value;
        });
        this.data = data
    };
}

export const entityObjectSlice = new EntityStoreObject()
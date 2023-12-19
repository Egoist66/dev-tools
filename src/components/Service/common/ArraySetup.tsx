import {ChangeEvent, FC, memo} from "react";
import {Button, Col, Form} from "react-bootstrap";
import {ArrayRandomContent} from "./ArrayContent.tsx";


type ArraySetupProps = {

    onSetVarName: (e: ChangeEvent<HTMLInputElement>) => void
    onSetValues: (e: ChangeEvent<HTMLInputElement>) => void
    onGenerateArray: () => void
    onGenerateRandom: () => void
    onChangeValuesCount: (e: ChangeEvent<HTMLInputElement>) => void
    values: string
    valuesCount: number
    isToggled: boolean
    toggle: () => void
}
export const ArraySetup: FC<ArraySetupProps> = memo(({
    onSetVarName,
    onSetValues,
    onGenerateArray,
    onGenerateRandom,
    onChangeValuesCount,
    isToggled,
    toggle,
    values,
    valuesCount,
 }) => {
    return (
        <>

            <datalist id="myList">
                <option value="[1, 2, 3, 4]"/>
                <option value="['a', 'b', 'c']"/>

            </datalist>

            <Col>


                <Form.Control
                    type={'text'}
                    id={'manual-input'}
                    defaultValue={'const'}
                    onChange={onSetVarName}
                    className={'mb-3'}
                    placeholder={'Give a variable name'}
                />

                <Form.Control
                    type={'text'}
                    value={values}
                    onChange={onSetValues}
                    list={'myList'}
                    id={'manual-input'}
                    placeholder={'Enter values with an indent'}
                />

                <Button
                    disabled={!values.length || isToggled}
                    onClick={onGenerateArray}
                    className={'mt-3 mb-5'}>Generate array
                </Button>


            </Col>


            <Col>
                <Form.Check
                    onChange={toggle}
                    type={'checkbox'}
                    data-checked={isToggled}
                    label={'Make random?'}
                    checked={isToggled}
                    id={'random-checkbox'}
                />

                <ArrayRandomContent
                    isRandom={isToggled}
                    type={'number'}
                    changeElemsCount={onChangeValuesCount}
                    onGenerateRandom={onGenerateRandom}
                    elemsCount={valuesCount}
                    placeHolder={'Count of array elements'}
                />
            </Col>


        </>
    )
})
import {ChangeEvent, FC, memo, useCallback, useState} from "react";
import {Button, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import {ArrayRandomContent} from "./common/ArrayContent.tsx";

type ArrayData = {
    strCount: number
    digitCount: number
    digitVarName: string
    digitValues: string
    digitArrOut: string
    strVarName: string
    strValues: string
}
export const ArrayControls: FC = memo(() => {
    const [isRandomChecked, setRandomChecked] = useState<boolean>(true)
    const [arrayData, setArrayData] = useState<ArrayData>({
        digitCount: 3,
        strCount: 3,
        digitVarName: '',
        digitValues: '',
        digitArrOut: '',
        strVarName: '',
        strValues: ''
    })


    const setDigitVarName = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitVarName: e.currentTarget.value
        })
    }

    const setDigitValues = (e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitValues: e.currentTarget.value
        })
    }

    const changeDigitsElemsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            digitCount: +e.currentTarget.value
        })
    }, [arrayData.digitCount])


    // @ts-ignore
    const changeStrElemsCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setArrayData({
            ...arrayData,
            strCount: +e.currentTarget.value
        })
    }, [arrayData.strCount])

    const toggleRandomCheck = () => {
        setRandomChecked(isRandomChecked => !isRandomChecked)
    }

    const generateManualDigitArray = () => {

        let arrVarName = arrayData.digitVarName.trim()
        let arrValues = arrayData.digitValues.trim().split(" ")

        setArrayData({
            ...arrayData,
            digitArrOut: `${arrVarName} = [${arrValues}]`
        })

    }

    return (

        <Tabs
            defaultActiveKey="digital array"
            className="mb-3"
        >
            <Tab eventKey="digital array" title="Digital Array">
                <Row>
                    <Col>

                        <Col>

                            <Form.Control
                                type={'text'}
                                id={'manual-input'}
                                defaultValue={'const'}
                                onChange={setDigitVarName}
                                className={'mb-3'}
                                placeholder={'Give a variable name'}
                            />

                            <Form.Control
                                type={'text'}
                                value={arrayData.digitValues}
                                onChange={setDigitValues}
                                id={'manual-input'}
                                placeholder={'Enter values with an indent'}
                            />

                            <Button
                                disabled={!arrayData.digitValues.length}
                                onClick={generateManualDigitArray}
                                className={'mt-3 mb-5'}>Generate array
                            </Button>

                        </Col>


                        <Col>
                            <Form.Check
                                onChange={toggleRandomCheck}
                                type={'checkbox'}
                                data-checked={isRandomChecked}
                                label={'Make random?'}
                                checked={isRandomChecked}
                                id={'random-checkbox'}
                            />

                            <ArrayRandomContent
                                isRandom={isRandomChecked}
                                type={'number'}
                                changeElemsCount={changeDigitsElemsCount}
                                elemsCount={arrayData.digitCount}
                                placeHolder={'Count of array elements'}
                            />
                        </Col>


                        <div className={'output'}>
                            {!arrayData.digitArrOut.length ? `[ ]` : arrayData.digitArrOut}
                        </div>

                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="string array" title="String Array">
                Tab content for Profile
            </Tab>

        </Tabs>
    )
})
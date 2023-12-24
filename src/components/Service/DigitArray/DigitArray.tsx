import {FC, memo} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {ArraySetup} from "../common/ArraySetup.tsx";
import {useArray} from "../../../hooks/useArray.ts";
import {UIToast} from "../features/Toast.tsx";
import {useCopy} from "../../../hooks/useCopy.ts";


export const DigitArray: FC = memo(() => {

    const {setRandomArray, outRef, randomArray, copyOut, isCopied} = useCopy()


    const {
        arrOut,
        values,
        count,
        setVarName,
        generateRandom,
        changeElemsCount,
        generateManualArray,
        setOpen,
        open,
        toggle,
        isToggled,
        isGenerated,
        setValues

    } = useArray()

    const generateRandomArray = (type: 'int' | 'str') => {
        setRandomArray(`const ${'val_' + Math.round(Math.random() * 42 + 4)}_rand = [${generateRandom(type)}]`)
    }


    return (
        <Row>
            <Col>

                <ArraySetup
                    onSetVarName={setVarName}
                    onSetValues={setValues}
                    onGenerateArray={() =>generateManualArray(true)}
                    onGenerateRandom={() => generateRandomArray('int')}
                    onChangeValuesCount={changeElemsCount}
                    values={values}
                    valuesCount={count}
                    isToggled={isToggled}
                    toggle={toggle}


                />

                {isGenerated ? <UIToast
                    isToggled={open}
                    setToggle={() => setOpen(false)}
                    type={'Success'}
                    header={'Success!'}
                    body={'Array is generated'}

                /> : null}

                <Row style={{alignItems: 'center', justifyContent: 'space-between'}} className={'output mt-5'}>
                    <Col>
                        {!isToggled ? <span ref={outRef} id={'out'}>{!arrOut.length ? `[ ]` : arrOut}</span> :
                            <span ref={outRef}>{randomArray}</span>
                        }
                    </Col>

                    <Col style={{textAlign: 'end'}}>
                        <Button onClick={copyOut} variant={'outline-secondary'}>{isCopied ? 'Copied!' : 'Copy'}</Button>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
})
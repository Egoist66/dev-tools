import {FC, memo, useRef, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {ArraySetup} from "../common/ArraySetup.tsx";
import {useDigitalArray} from "../../../hooks/useDigitalArray.ts";
import {UIToast} from "../features/Toast.tsx";


export const DigitArray: FC = memo(() => {
    const [isCopied, setCopy] = useState<boolean>(false)
    const [randomArray, setRandomArray] = useState<string>('')

    const outRef = useRef<HTMLSpanElement>(null)
    const copyOut = () => {

        if (outRef.current) {
            if (window.navigator) {
                navigator.clipboard.writeText(outRef?.current?.textContent!)
                    .then(() => {
                        setCopy(true)
                        const timer = setTimeout(() => {
                            setCopy(false)
                            clearTimeout(timer)
                        }, 1000)
                    })
                    .catch((e) => {
                        console.log(e)
                        setCopy(false)
                    })
            }
        }
    }

    const {
        digitArrOut,
        digitValues,
        digitCount,
        setDigitVarName,
        generateRandom,
        changeDigitsElemsCount,
        generateManualDigitArray,
        setOpen,
        open,
        toggle,
        isToggled,
        isGenerated,
        setDigitValues

    } = useDigitalArray()

    const generateRandomArray = () => {
        setRandomArray(`const ${'val_'+ Math.round(Math.random() * 42 + 4)}_rand = [${generateRandom()}]`)
    }


    return (
        <Row>
            <Col>

                <ArraySetup
                    onSetVarName={setDigitVarName}
                    onSetValues={setDigitValues}
                    onGenerateArray={generateManualDigitArray}
                    onGenerateRandom={generateRandomArray}
                    onChangeValuesCount={changeDigitsElemsCount}
                    values={digitValues}
                    valuesCount={digitCount}
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
                        {!isToggled ? <span ref={outRef} id={'out'}>{!digitArrOut.length ? `[ ]` : digitArrOut}</span> :
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
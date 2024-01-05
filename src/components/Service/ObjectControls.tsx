import {FC, useEffect, useState} from "react";
import {useRootStore} from "../../store/provider/AppStoreProvider.tsx";
import {observer} from "mobx-react";
import {Button, Col, Row} from "react-bootstrap";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {ObjectItem} from "./common/ObjectItem.tsx";
import {useCopy} from "../../hooks/useCopy.ts";

export const ObjectControls: FC = observer(() => {
    const [listRef] = useAutoAnimate<HTMLUListElement>();
    const {outRef, copyOut, isCopied} = useCopy()
    const [isEditable, setEditable] = useState<boolean>(false)

    const [inputCount, setInputsCount] = useState<number>(0)

    const switchEditable = () => {
        setEditable(isEditable => !isEditable)

    }

    const reduceInputIndex = (index: number) => {
        if (inputCount <= 0){
            return;
        }
        setInputsCount(inputCount => inputCount - index)
    }

    useEffect(() => {
        if (isEditable){
            outRef?.current?.focus()
        }
    }, [isEditable])

    const {
        entityStoreObject:
            {
                handleGenerateJson,
                addInput,
                inputs,
                data
            }
    } = useRootStore()


    useEffect(() => {
            if (inputs.length > 1){
                setInputsCount(inputCount => inputCount + 1)
            }

        console.log(inputs[inputCount])
    }, [inputs.length]);

    console.log(inputCount)

    return (

            <Row>

                <Col className={'mb-3'} style={{
                    gap: 20,
                    display: "flex",
                    alignItems: 'baseline'
                }}>
                    <Button  variant={'outline-primary'} onClick={addInput}>Add input</Button>
                </Col>
                <Row>
                    <ul style={{listStyle: "none"}} ref={listRef}>
                        {inputs.map((input, index) => (

                            <ObjectItem
                                key={index}
                                reduceInputIndex={reduceInputIndex}
                                input={input}
                                index={index}/>

                        ))}
                    </ul>

                </Row>


                <Col style={{
                    background: 'white',
                    padding: 10,
                    display: "flex",
                    alignItems: 'center',
                    gap: 10,
                    justifyContent: 'space-between',
                    margin: 10
                }}>
                    <span style={{cursor: "pointer"}} onClick={switchEditable}>&#9999;</span>
                    <Col>
                        <pre style={{margin: 0}}>
                            <span style={{display: 'block', padding: 3}} contentEditable={isEditable} ref={outRef}>const obj = {JSON.stringify(data, null, 2)}</span>
                        </pre>
                    </Col>
                    <Col style={{textAlign: 'right'}}  lg={'2'}>
                        <Button onClick={copyOut} variant={'outline-secondary'}>{isCopied ? 'Copied!': 'Copy'}</Button>
                    </Col>
                    <Button disabled={inputs.length <= 0 ? true : !inputs[inputCount]?.key.length || !inputs[inputCount]?.value.length} onClick={handleGenerateJson}>Generate</Button>

                </Col>


                {inputCount}

            </Row>

    )
})
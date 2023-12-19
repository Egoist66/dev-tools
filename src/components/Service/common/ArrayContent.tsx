import {ChangeEvent, FC, memo} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

type ArrayContentPropsType = {
    isRandom: boolean
    elemsCount: number
    placeHolder: string
    onGenerateRandom: () => void
    type: any,
    changeElemsCount: (e: ChangeEvent<HTMLInputElement>) => void

}

export const ArrayRandomContent: FC<ArrayContentPropsType> = memo(({isRandom, elemsCount, placeHolder, type,
     changeElemsCount, onGenerateRandom
 }) => {



    return (

        <Row>
            <Col className={'mt-3'}>
                {isRandom &&
                   <Col>
                         <Form.Control
                           onChange={changeElemsCount}
                           placeholder={placeHolder}
                           type={type}
                           min={1}
                           step={1}
                           value={elemsCount}
                           max={10}
                       />

                       <Button onClick={onGenerateRandom} className={'mt-3'}>Surprise me</Button>
                   </Col>
                }


            </Col>


        </Row>
    )
})
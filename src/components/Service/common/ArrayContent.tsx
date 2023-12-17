import {ChangeEvent, FC, memo} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

type ArrayContentPropsType = {
    isRandom: boolean
    elemsCount: number
    placeHolder: string
    type: any,
    changeElemsCount: (e: ChangeEvent<HTMLInputElement>) => void

}

export const ArrayRandomContent: FC<ArrayContentPropsType> = memo(({isRandom, placeHolder, type,
     changeElemsCount,
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
                           defaultValue={3}
                       />

                       <Button className={'mt-3'}>Surprise me</Button>
                   </Col>
                }


            </Col>


        </Row>
    )
})
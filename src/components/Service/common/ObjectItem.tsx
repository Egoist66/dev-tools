import {FC, memo} from "react";
import {Button, Col, FormControl, Row} from "react-bootstrap";
import {useRootStore} from "../../../store/provider/AppStoreProvider.tsx";

type ObjectItemProps = {
    input: { key: string, value: string }
    index: number
}
export const ObjectItem: FC<ObjectItemProps> = memo(({input, index}) => {
    const {
        entityStoreObject: {

            handleChange,
            removeInput
        }
    } = useRootStore()
    return (

        <li>
            <Row>
                <Col style={{
                    display: 'flex',
                    paddingBottom: 20,
                    alignItems: 'baseline',
                    flexDirection: 'column',
                    gap: 10
                }}>
                    <FormControl
                        value={input.key}
                        placeholder="Key"
                        onChange={(e) => handleChange(index, e.target.value, input.value)}
                    />
                    <FormControl
                        value={input.value}
                        placeholder="Value"
                        onChange={(e) => handleChange(index, input.key, e.target.value)}
                    />
                    <Button variant={'outline-danger'}
                            onClick={() => removeInput(index, input.key)}>
                        Remove input
                    </Button>


                </Col>
            </Row>
        </li>
    )
})
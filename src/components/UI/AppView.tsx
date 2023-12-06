import {FC, ReactNode, memo} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Form} from "react-bootstrap";
import {entityOptions} from './App.tsx';

export type AppViewProps = {
    changeMode: (mode: string) => void
    showControls: () => ReactNode
    _mode: string

}

export const AppView: FC<AppViewProps> = memo(({changeMode, _mode, showControls}) => {
    return (
        <Container className='p-5'>

            <h1 className='display-6 text-center'>Entities Constructor</h1>

            <Row>
                <Col>
                    <Form.Select data-value={_mode} value={_mode} onChange={(e) => changeMode(e.currentTarget.value)}>
                        <option>Choose what entity to create</option>


                        {entityOptions.map(o => (
                            <option key={o.id} value={o.id}>{o.entity}</option>
                        ))}

                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col>

                    {showControls()}

                </Col>
            </Row>


        </Container>
    );
});

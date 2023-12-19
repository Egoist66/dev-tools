import {FC, memo, ReactNode} from 'react';
import {Col, Container, Form, Row} from 'react-bootstrap';
import {EntityStoreModeValues, EntityStoreOptions} from "../../store/slices/entity-store-mode.ts";

export type AppViewProps = {
    changeMode: (mode: EntityStoreModeValues) => void
    showControls: () => ReactNode
    options: Array<EntityStoreOptions>
    _mode: string

}

export const AppView: FC<AppViewProps> = memo(({options, changeMode, _mode, showControls}) => {
    return (
        <Container className='p-5'>

            <h1 className='display-6 text-center fw-semibold'>Entities Generator</h1>

            <Row>
                <Col>
                    <Form.Select data-value={_mode} value={_mode} onChange={(e) => changeMode(e.currentTarget.value)}>
                        <option disabled>Choose what entity to create</option>

                        {options.map(o => (
                            <option key={o.id} value={o.id}>{o.entityName}</option>
                        ))}

                    </Form.Select>
                </Col>

                <Col>

                    {showControls()}

                </Col>
            </Row>


        </Container>
    );
});

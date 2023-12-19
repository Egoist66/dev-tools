import {FC, memo} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

type UIToastProps = {
    isToggled: boolean
    setToggle: (bool: boolean) => void
    type: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Warning' | 'Info' | 'Light' | 'Dark'
    header: string,
    body: string
}
export const UIToast: FC<UIToastProps> = memo(({
   isToggled,
   setToggle,
   type,
   header,
   body
}) => {


    return (
        <Row>
            <Col md={9} className="mb-2">

                <Toast autohide delay={2500} className={'toast'} bg={type.toLowerCase()} show={isToggled} onClose={() => setToggle(false)}>

                    <Toast.Header style={{justifyContent: 'space-between'}}>
                        {header}
                    </Toast.Header>
                    <Toast.Body>
                        <b>{body}</b>
                    </Toast.Body>
                </Toast>
            </Col>

        </Row>
    );
})


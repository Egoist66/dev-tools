import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Form } from "react-bootstrap";
import { selector, useAppDispatch, useAppSelector } from '../store/store';
import { setEntityMode } from '../store/entities-slice/entities-reducer';
import { ArrayControls } from './ArrayControls';
import { ObjectControls } from './ObjectControls';
import { ClassControls } from './ClassControls';

const entityOptions = [

  { id: '1', entity: 'Array' },
  { id: '2', entity: 'Object' },
  { id: '3', entity: 'Class' },
]


export const App: FC = () => {

  const dispatch = useAppDispatch()
  const globalMode = useAppSelector(selector)

  const [_mode, setMode] = useState<string>('')

  const changeMode = useCallback((mode: string) => {

    setMode(mode)

  }, [_mode])

  const showControls = () => {

    switch (globalMode.mode) {
      case '1':
        return <ArrayControls />
      case '2':
        return <ObjectControls />
      case '3':
        return <ClassControls />

      default:
        return 'No such value!'
    }
  }

  useEffect(() => {
    dispatch(setEntityMode({ mode: _mode }))
  }, [_mode])

  return (
    <AppView
      _mode={_mode}
      showControls={showControls}
      changeMode={changeMode}
    />
  )
}



type AppViewProps = {
  changeMode: (mode: string) => void
  showControls: () => ReactNode 
  _mode: string

}

const AppView: FC<AppViewProps> = ({ changeMode, _mode, showControls}) => {
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
  )
}

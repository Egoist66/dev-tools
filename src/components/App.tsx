import { FC, useCallback, useEffect, useState } from 'react';
import { selector, useAppDispatch, useAppSelector } from '../store/store';
import { setEntityMode } from '../store/entities-slice/entities-reducer';
import { ArrayControls } from './ArrayControls';
import { ObjectControls } from './ObjectControls';
import { ClassControls } from './ClassControls';
import { AppView } from './AppView';

export const entityOptions = [

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

  const showControls = useCallback(() => {

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
  }, [globalMode.mode])

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







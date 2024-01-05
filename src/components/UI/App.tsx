import {FC, memo, useCallback, useEffect} from 'react';
import {ArrayControls} from '../Service/ArrayControls.tsx';
import {ObjectControls} from '../Service/ObjectControls.tsx';
import {AppView} from './AppView.tsx';
import {observer} from "mobx-react";
import {useRootStore} from "../../store/provider/AppStoreProvider.tsx";
import {EntityStoreModeValues} from "../../store/slices/entity-store-mode.ts";


export const App: FC = memo(observer(() => {

    const {entityMode: {setEntityMode, mode, entityOptions}} = useRootStore()

    const changeMode = useCallback((mode: EntityStoreModeValues) => {

        setEntityMode(mode)

    }, [mode])

    const showControls = useCallback(() => {

        switch (mode) {
            case 'Array':
                return <ArrayControls/>
            case 'Object':
                return <ObjectControls/>

            default:
                return ''
        }
    }, [mode])

    useEffect(() => {
        if (mode === 'Choose what entity to create') {
            document.title = 'Entity constructor'
        } else {
            document.title = mode + ' mode'
        }

    }, [mode])

    return (

        <AppView
            _mode={mode}
            options={entityOptions}
            showControls={showControls}
            changeMode={changeMode}
        />

    )
}))







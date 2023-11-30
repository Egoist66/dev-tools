import {configureStore} from '@reduxjs/toolkit';
import entitiesReducer from './entities-slice/entities-reducer';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';




export const store = configureStore({
     reducer: {
          entities: entitiesReducer
     }
})


export const selector = (state: RootState) => state.entities
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDisaptch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export type AppDisaptch = typeof store.dispatch
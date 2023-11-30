import {createSlice} from '@reduxjs/toolkit';
import { SetModeAction } from './actions';

type initialStatetType = {
     mode: string
}

const state: initialStatetType = {
     mode: ''
}

export const entitiesSlice = createSlice({
     name: 'entities-reducer',
     initialState: state,
     reducers: {
          setEntityMode(state: initialStatetType, action: SetModeAction){
               state.mode = action.payload.mode
          }
     }

})
export const {setEntityMode} = entitiesSlice.actions
export default entitiesSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Faq } from '../../Faq'
export interface toggleState{
    value: boolean
}
const initialState:toggleState = {
    value: false
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
      openFaq: (state, action: PayloadAction<number>) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // state.value = !state.value
        console.log(action.payload);
        Faq.map(aq => aq.id === action.payload? state.value = !state.value : "")
      }
    }
})

export const { openFaq } = toggleSlice.actions
export default toggleSlice.reducer
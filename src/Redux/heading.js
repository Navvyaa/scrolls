import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    processBool: false
}

const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
        setTitle: function (state, action) {
            // return action.payload
            state.title = action.payload
        },
        setProcess: function (state, action) {
            state.processBool = true
        },
        unsetProcess: function (state, action) {
            state.processBool = false
        }
    }
})

export default titleSlice
export const { setTitle, setProcess, unsetProcess } = titleSlice.actions
import { createSlice } from '@reduxjs/toolkit'

let shoppinglist = createSlice({
    name: 'shoppinglist',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addOne(state, action) {
            state[action.payload].count += 1
        },
        minusOne(state, action) {
            state[action.payload].count -= 1
        },
        cartAdd(state, action) {
            state.push(action.payload)
        },
        deleteOne(state, action) {
            state.splice(action.payload, 1)
        }
    }
})

export let { addOne, minusOne, cartAdd, deleteOne } = shoppinglist.actions;

export default shoppinglist
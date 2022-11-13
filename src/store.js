import { configureStore, createSlice } from '@reduxjs/toolkit'
import shoppinglist from './store/shoppinglistSlice.js'

let user = createSlice({
    name: 'user',
    initialState: { name: 'jaeman', age: 20 },
    reducers: {
        changeName(state) {
            return {
                ...state,
                age: 30
            }
        }
    }
})

export let { changeName } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 13],
})

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        shoppinglist: shoppinglist.reducer
    }
}) 
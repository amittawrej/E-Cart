import { createSlice } from "@reduxjs/toolkit";


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})

//now setProduct is action in this position not from useState Hook
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
//thunk Middleware for fetching data and store in store.

export function fetchProducts() {
    return async function fetchProductThunk(dispatch,getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));

        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}
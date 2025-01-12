'use client'

import { fetchCountries } from '@/api/newsApi';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: '',
    status: 'idle',
    error: null
}

const categorySlice = createSlice({
    name: 'country',
    initialState,
    loading: false,
    reducers: {
        // loading(state) {
        //     state.status = 'loading'
        // },
        // fetchSuccess(state, action) {
        //     console.log(action.payload, 'payload')
        //     state.status = 'success';
        //     state.country = action.payload;
        // },
        // fetchError(state, action) {
        //     state.status = 'failed';
        //     state.error = action.payload;
        // }

    }
})

export const { loading, fetchSuccess, fetchError } = categorySlice.actions;
export default categorySlice.reducer;



// action creator function

export const fetchCountry = () => async (dispatch) => {
    dispatch(loading());
    try {
        const countryList = await fetchCountries();
        console.log(countryList, 'countryList')
        dispatch(fetchSuccess(countryList))
    } catch (error) {
        dispatch(fetchError(error.message))
    }
}




'use client'

import { fetchNewsData } from '@/api/newsApi';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    article: [],
    status: 'idle',
    error: null
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    loading: false,
    totalResults: null,
    reducers: {
        loading(state) {
            state.status = 'loading'
        },
        fetchSuccess(state, action) {
            console.log(action.payload, 'payload')
            state.status = 'success';
            state.article = action.payload.articles;
            state.totalResults = action.payload.totalResults
        },
        fetchError(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
})

export const { loading, fetchSuccess, fetchError } = newsSlice.actions;
export default newsSlice.reducer;



// action creator function

export const fetchNews = (category, search, page, pageSize) => async (dispatch) => {
    console.log(category, search, page, pageSize, 'aliii')
    dispatch(loading());
    try {
        const article = await fetchNewsData(category, search, page, pageSize);
        // console.log(article, 'article')
        dispatch(fetchSuccess(article))
    } catch (error) {
        dispatch(fetchError(error.message))
    }
}




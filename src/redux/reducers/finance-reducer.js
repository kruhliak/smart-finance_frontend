import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  deleteTransaction,
  getSummaryByYear,
  getAllOperationByMonth,
  getCategoriesByMonth,
} from '../operations/transaction-operation';

const initialState = {
  operations: {},
  categories: {},
  summary: {},
  isLoading: null,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [addTransaction.fulfilled](state, action) {
      state.isLoading = false;
      state.transactions = action.payload;
    },
    [addTransaction.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getSummaryByYear.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.summary = payload;
    },
    [getSummaryByYear.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getSummaryByYear.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getCategoriesByMonth.fulfilled](state, { payload }) {
      console.log('payload:', payload);
      state.isLoading = false;
      state.categories = payload;
    },
    [getCategoriesByMonth.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getCategoriesByMonth.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getAllOperationByMonth.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.operations = payload;
    },
    [getAllOperationByMonth.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllOperationByMonth.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteTransaction.fulfilled](state, { payload }) {
      state.items = [...state.items.filter(({ id }) => id !== payload)];
    },
    [deleteTransaction.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default financeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  deleteTransaction,
  getTransactionByType,
} from '../operations/transaction-operation';

const initialState = {
  transactions: {},
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
    [getTransactionByType.fulfilled](state, action) {
      state.isLoading = false;
      state.transactions = action.payload.result;
    },
    [getTransactionByType.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getTransactionByType.rejected](state, action) {
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

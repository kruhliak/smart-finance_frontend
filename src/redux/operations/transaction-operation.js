import { createAsyncThunk } from '@reduxjs/toolkit';
import * as financeAPI from 'services/financeAPI';

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.addOperation(value);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const response = await financeAPI.deleteOperation(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTransactionByType = createAsyncThunk(
  'finance/getTransactionByType',
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.operationByType(type);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

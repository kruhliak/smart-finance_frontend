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

export const getSummaryByYear = createAsyncThunk(
  'finance/getSummaryByYear',
  async (year, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.getSummaryByYear(year);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getAllOperationByMonth = createAsyncThunk(
  'finance/getAllOperationByMonth',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.getAllOperationByMonth(value);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCategoriesByMonth = createAsyncThunk(
  'finance/getCategoriesByMonth',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.getCategoriesByMonth(value);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as financeAPI from 'services/financeAPI';
import { toast } from 'react-hot-toast';

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.addOperation(value);
      toast.success('Успешный ввод данных');
      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`Add error ${error.message}`));
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const response = await financeAPI.deleteOperation(id);
      toast.success('Успешная очистка данных');
      return response;
    } catch (error) {
      return rejectWithValue(toast.error(`Delete error ${error.message}`));
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
      return rejectWithValue(toast.error(`${error.message}`));
    }
  },
);

export const getAllOperationByMonth = createAsyncThunk(
  'finance/getAllOperationByMonth',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.getAllOperationByMonth(...value);
      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`${error.message}`));
    }
  },
);

export const getCategoriesByMonth = createAsyncThunk(
  'finance/getCategoriesByMonth',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await financeAPI.getCategoriesByMonth(...value);

      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`${error.message}`));
    }
  },
);

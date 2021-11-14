import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from 'services/userAPI';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSignup = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userAPI.userSignup(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.userLogin(user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userAPI.userLogout(user);
      token.unset();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from 'services/userAPI';
import { toast } from 'react-hot-toast';
// import { useLocation } from 'react-router';

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
      return rejectWithValue(toast.error(`Register error ${error.message}`));
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
      return rejectWithValue(toast.error(`Login error ${error.message}`));
    }
  },
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userAPI.userLogout();
      token.unset();
      return response;
    } catch (error) {
      return rejectWithValue(toast.error(`Log out error ${error.message}`));
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

export const setGoogleToken = createAsyncThunk(
  'auth/setGoogleToken',
  async (token, rejectWithValue) => {
    token.set(token);
    try {
      return token;
    } catch (error) {
      return rejectWithValue(
        toast.error(`Google register error ${error.message}`),
      );
    }
  },
);

export const userCreateBalance = createAsyncThunk(
  'auth/CreateBalance',
  async (balance, { rejectWithValue }) => {
    try {
      await userAPI.userSetBalance(balance);
      return balance;
    } catch (error) {
      return rejectWithValue(toast.error(`Balance ${error.message}`));
    }
  },
);

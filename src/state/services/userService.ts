import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, BASE_HEADERS } from ".";
import axios from "axios";


const LOGIN_API = BASE_URL + "dj-rest-auth/login/";

export const userLogin = createAsyncThunk(
    'user/login',
    async () => {
        const { data } = await axios.post(LOGIN_API, {
            email: 'johndoe@gmail.com',
            password: 'test@123',
        }, {
            headers: BASE_HEADERS
        })
        return data;
    },
);

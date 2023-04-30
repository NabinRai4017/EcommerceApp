import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import User from '../model/user'
import { userLogin } from "../services/userService";


interface UserState{
    user?: User;
    key?: string;
    status: string;
    error?: string;
}

const initialState: UserState = {
    status: 'idle',
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(
            userLogin.fulfilled,
            (state, action) => {
                console.log('succeeded')
                state.status = 'succeeded';
                state.key = action.payload.key;
                state.user = action.payload.user;
            }
        )
        .addCase(
            userLogin.pending,
            (state, action) => {
                console.log('loading')
                state.status = 'loading';
            }
        )
        .addCase(
            userLogin.rejected,
            (state, action) => {
                console.log('failed')
                console.log(action.error.message)
                state.status = 'failed';
                state.error = action.error.message
            }
        )

        // other cases
    }
});

const user = (state: RootState) => state.user.user;
export const getUser = createSelector(user, (user) => {
    return user;
});

const status = (state: RootState) => state.product.status;
export const userStatus = createSelector([status], (status) => {
    return status;
});

const error = (state: RootState) => state.product.error;
export const userError = createSelector([error], (error) => {
    return error;
});

export default UserSlice.reducer;

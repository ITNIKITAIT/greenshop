import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './fetching';

type AuthState = {
    token: string | null;
    user: IUser | null;
};

export interface IUser {
    id: number;
    email: string;
    name: string;
    verified: boolean;
}

const initialState: AuthState = {
    token: localStorage.getItem('jwt') || null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        isVerified: (state) => state.user?.verified,
        selectUser: (state) => state.user,
        selectUserId: (state) => state.user?.id,
    },
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            const token = action.payload;
            localStorage.setItem('jwt', token);
            state.token = token;
        },
        logout: (state, action) => {
            localStorage.removeItem('jwt');
            state.token = null;
            state.user = null;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const { token, user } = action.payload;
            if (token) {
                localStorage.setItem('jwt', token);
            }
            state.token = token;
            state.user = user;
        });
    },
});

export const { setToken, logout, setUser } = authSlice.actions;
export const { isVerified, selectUser, selectUserId } = authSlice.selectors;
export default authSlice.reducer;

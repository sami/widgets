import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------
// Constants & Types (JSDoc)
// ----------------------------------------------------------------------

/**
 * @typedef {Object} User
 * @property {string} id - Unique ID
 * @property {string} name - User full name
 * @property {string} email - User email address
 */

/**
 * @typedef {Object} UsersState
 * @property {User[]} users - List of users
 * @property {User|null} selectedUser - Currently selected user
 * @property {('idle'|'loading'|'succeeded'|'failed')} status - Async status
 * @property {string|null} error - Error message
 */

/** @type {UsersState} */
const initialState = {
    users: [],
    selectedUser: null,
    status: 'idle',
    error: null
};

// ----------------------------------------------------------------------
// Async Thunks
// ----------------------------------------------------------------------

/**
 * Fetch users from API
 * @type {import('@reduxjs/toolkit').AsyncThunk<User[], void, {}>}
 */
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            // Simulate API call
            // const response = await api.get('/users');
            // return response.data;

            // Mock delay & response
            await new Promise(resolve => setTimeout(resolve, 1000));
            return [
                { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
                { id: '2', name: 'Bob Smith', email: 'bob@example.com' }
            ];
        } catch (err) {
            return rejectWithValue(err.message || 'Failed to fetch users');
        }
    }
);

/**
 * Add a new user
 */
export const addUser = createAsyncThunk(
    'users/addUser',
    async (userData, { rejectWithValue }) => {
        try {
            // const response = await api.post('/users', userData);
            // return response.data;

            await new Promise(resolve => setTimeout(resolve, 500));
            return { id: Math.random().toString(36).substr(2, 9), ...userData };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// ----------------------------------------------------------------------
// Slice Definition
// ----------------------------------------------------------------------

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Sync actions
        selectUser: (state, action) => {
            const userId = action.payload;
            state.selectedUser = state.users.find(user => user.id === userId) || null;
        },
        clearSelection: (state) => {
            state.selectedUser = null;
        },
        resetStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Users
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Something went wrong';
            })

            // Add User
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            });
    }
});

// ----------------------------------------------------------------------
// Actions & Reducer
// ----------------------------------------------------------------------

export const { selectUser, clearSelection, resetStatus } = usersSlice.actions;

export default usersSlice.reducer;

// ----------------------------------------------------------------------
// Selectors
// ----------------------------------------------------------------------

// Basic selectors
export const selectAllUsers = (state) => state.users.users;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;
export const selectSelectedUser = (state) => state.users.selectedUser;

// Memoized complex selector
export const selectUsersCount = createSelector(
    [selectAllUsers],
    (users) => users.length
);

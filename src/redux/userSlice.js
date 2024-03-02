import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user,
        }
        return userData

    } catch (error) {
        console.log('userSlice Error 18 : ', error)
        throw error
    }
})
export const signUp = createAsyncThunk('user/signup', async ({ email, password }) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user
        }
        return userData;
    } catch (warning) {
        console.log('userSlice ERROR [37]: ', warning);
        throw warning
    }
})

const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isRegist: false,
    isAuth: false,
    token: null,
    user: null,
    warning:null,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setEmail: (state, action) => {
        const lowerCaseEmail = action.payload.toLowerCase()
        state.email = lowerCaseEmail;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
      setIsRegist: (state, action) => {
        state.isRegist = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.error = null
          state.isLoading = true;
          state.isAuth = false;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.password = null;
          state.isLoading = false;
          state.isAuth = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(login.rejected, (state, action) => {
          state.password = null;
          state.error = action.error.message;
          state.isLoading = false;
          state.isAuth = false;
        })
        .addCase(signUp.pending, (state) => {
          state.isLoading = true;
          state.isRegist = false;
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.password = null;
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(signUp.rejected, (state, action) => {
          state.password = null;
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });

export const { setEmail, setPassword, setIsLoading,setIsRegist } = userSlice.actions
export default userSlice.reducer
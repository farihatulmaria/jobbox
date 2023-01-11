import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
const { createSlice,createAsyncThunk} = require('@reduxjs/toolkit');
const initialState ={
    email:"",
    role:"",
    isLoading:true,
    isError:false,
    error:""
}

//Async Thunks

export const createUser = createAsyncThunk('auth/signup',async ({email,password})=>{
    const data = await createUserWithEmailAndPassword(auth,email,password);
    return data?.user?.email
})
export const loginUser = createAsyncThunk('auth/login',async ({email,password})=>{
    const data = await signInWithEmailAndPassword(auth,email,password);
    return data?.user?.email
})
export const loginUserWithGoogle = createAsyncThunk('auth/loginWithGoogle',async ()=>{
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth,provider);
    return data.user.email;
})



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.email = ""
        },
        setUser :(state,{payload})=>{
            state.email= payload;
            state.isLoading =false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(createUser.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.email =payload
        }).addCase(createUser.rejected,(state,{error})=>{
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
            state.email =''
        })

        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(loginUser.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.email =payload
        }).addCase(loginUser.rejected,(state,{error})=>{
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
            state.email =''
        })

        builder.addCase(loginUserWithGoogle.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(loginUserWithGoogle.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.email =payload
        }).addCase(loginUserWithGoogle.rejected,(state,{error})=>{
            state.isLoading = false;
            state.isError = true;
            state.error = error.message;
            state.email =''
        })
    }
})
export const {logout,setUser} = authSlice.actions
export default authSlice.reducer
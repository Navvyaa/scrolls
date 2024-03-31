import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import Baseurl from "./Baseurl";

const initialState = {
    loading: false,
    msg: '',
}

const RegOpenThunk = createAsyncThunk("register", async () => {
    return await Baseurl.get("participants/check_registration/")
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const RegMemberThunk = createAsyncThunk("register/member", async (data) => {
    console.log(data);
    return await Baseurl.post("participants/register/0", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const RegTeamThunk = createAsyncThunk("register/team", async (data) => {
    return await Baseurl.post("participants/team_register/", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const RegCACheck = createAsyncThunk("register/check", async (caEmail) => {
    return await Baseurl.patch("participants/register/", {email:caEmail})
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})


const RegCAThunk = createAsyncThunk("register/ca", async (data) => {
    console.log(data);
    return await Baseurl.post("participants/register/1", data)
        .then((res) => {
            return res
        })
        .catch((Err) => {
            return Err.response
        })
})

const RegisterSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //member
        builder.addCase(RegMemberThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(RegMemberThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0] 
        })
        builder.addCase(RegMemberThunk.rejected, (state, action) => {
            state.loading = false;
        })

         //team
         builder.addCase(RegTeamThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(RegTeamThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0]
        })
        builder.addCase(RegTeamThunk.rejected, (state, action) => {
            state.loading = false;
        })

         //CA
         builder.addCase(RegCAThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(RegCAThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0]
        })
        builder.addCase(RegCAThunk.rejected, (state, action) => {
            state.loading = false;
        })

        // ca check
        builder.addCase(RegCACheck.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(RegCACheck.fulfilled, (state, action) => {
            state.loading = false;
            state.msg = action.payload.data[0]
        })
        builder.addCase(RegCACheck.rejected, (state, action) => {
            state.loading = false;
        })

         // register open
         builder.addCase(RegOpenThunk.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(RegOpenThunk.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(RegOpenThunk.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default RegisterSlice

export {RegMemberThunk , RegCAThunk, RegTeamThunk, RegCACheck, RegOpenThunk}
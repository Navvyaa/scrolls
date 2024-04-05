import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    step:0
}

const StepSlice = createSlice({
    name:'step',
    initialState:initialState,
    reducers :{
        dialog0: function (state){
            state.step = 0;
        },
        dialog1:function (state){
            state.step = 1;
        },
        dialog2:function (state){
            state.step = 2;
        },
        dialog3:function (state){
            state.step = 3 ;
        },
        dialog4:function (state){
            state.step = 4 ;
        },
        dialog5:function (state){
            state.step = 5 ;
        },
        dialog6:function (state){
            state.step = 6 ;
        },
        dialog7:function (state){
            state.step = 7 ;
        },
        dialog8:function (state){
            state.step = 8 ;
        },
        dialog9:function (state){
            state.step = 9 ;
        },
        dialog10:function (state){
            state.step = 10 ;
        },
        dialog11:function (state){
            state.step = 11 ;
        },
        dialog12:function (state){
            state.step = 12 ;
        },
        dialog13:function (state){
            state.step = 13 ;
        },
        dialog14:function (state){
            state.step = 14 ;
        },
        logout: function(state){
            state.step = 15;
        },
        dialog16:function (state){
            state.step = 16;
        },
        dialog17:function (state){
            state.step = 17;
        },
        dialog18:function (state){
            state.step = 18;
        },
        dialog19:function (state){
            state.step = 19;
        },
        dialog20:function (state){
            state.step = 20;
        },
    }
})

export default StepSlice;
export const {dialog0, dialog1, dialog2, dialog3, dialog4, dialog5, dialog6, dialog7, dialog8, dialog9, dialog10, dialog11, dialog12, dialog13, dialog14, logout, dialog16, dialog17, dialog18, dialog19, dialog20} = StepSlice.actions;


// 1. register 1
// 2. register member
// 3. register team
// 4. register CA email check
// 5. register CA
// 6. login option
// 7. login 1
// 8. login 2
// 9. login 3
// 10. login 4
//  11. login team
// 12. fgt team
// 13. otp team
//  14. reset team

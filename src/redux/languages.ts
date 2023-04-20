import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

const languages:any={
    polish:{
        name:'polish',
        main:'Strona główna',
        view:'Podgląd',
        formName:'Imię',
        formAge:'Wiek',
        formBirthday:'Data urodzenia',
        formAbout:'Życiorys',
        send:'Wyślij',
        languages:{'polish':['Polski',0],'english':['Angielski',1]}
    },
    english:{
        name:'english',
        main:'MainPage',
        view:'View Page',
        formName:'Name',
        formAge:'Age',
        formBirthday:'birth Date',
        formAbout:'About you',
        send:'Send',
        
        languages:{'polish':['Polish',0],'english':['English',1]}
    }
}

const initialState = {
    text: languages.polish,
  }


const languagesSlice = createSlice({
    name:"language",
    initialState:initialState,
    reducers:{
        change: (state,langue:PayloadAction<string>)=>{
                try{
                    state.text=languages[langue.payload] 
                }
                catch{
                    throw new Error("langue doesn't exist");
                }
            },
        },
});

export const {change}= languagesSlice.actions

export default languagesSlice.reducer
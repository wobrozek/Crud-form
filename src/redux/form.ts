import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export type Form ={
    id:number | null,
    name:string,
    age:number,
    about: string,
    birthDate: Date | string,
}

interface peopleState{
    people:Form[];
    id:Number;
}

const initialState:peopleState = {
    people:[],
    id:0
  }


const formSlice = createSlice({
    name:"form",
    initialState:initialState,
    reducers:{
        add: (state,data:PayloadAction<Form>)=>{
                data.payload.id=state.id;
                state.id=state.id + 1
                state.people=[...state.people,data.payload]
            },
        delete:(state,id:PayloadAction<number>)=>{
                state.people.map((element)=>{
                    if(element.id!=id.payload){
                        return element
                    }
                })
            
        },
    }
});

export const {add}= formSlice.actions

export default formSlice.reducer
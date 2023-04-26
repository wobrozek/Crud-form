import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export type Form ={
    id:number | null,
    name:string,
    age:number,
    about: string,
    birthDate: string | Date,
}

interface peopleState{
    people:Form[];
    id:Number
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
            // if id is null add new Form to array
                if(!data.payload?.id){
                    data.payload.id=state.id;
                    state.id=state.id + 1
                    state.people=[...state.people,data.payload]
                }
            },
        remove:(state,id:PayloadAction<number>)=>{
                state.people=state.people.filter((element)=>{
                    return element.id !== id.payload
                })
        },
        removeMultiple:(state,ids:PayloadAction<number[]>)=>{
            state.people=state.people.filter((element)=>{
                return !ids.payload.includes(element.id)
            })
        },
        edit:(state,data:PayloadAction<Form>)=>{
                state.people=state.people.map((element)=>{
                    if(element.id === data.payload.id ){
                        return data.payload;
                    }
                    return element
                })
        }
    },
});

export const { add,remove,edit,removeMultiple}= formSlice.actions

export default formSlice.reducer
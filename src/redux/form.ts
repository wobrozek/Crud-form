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
            // if id is null add new Form to array
                if(!data.payload?.id){
                    data.payload.id=state.id;
                    state.id=state.id + 1
                    state.people=[...state.people,data.payload]
                }
            // if id exist modify existing record
                else{
                    state.people.map((element)=>{
                        if(element.id === data.payload.id ){
                            return data.payload;
                        }
                    })
                }
                
            },
        remove:(state,id:PayloadAction<number>)=>{
                state.people=state.people.filter((element)=>{
                    element.id !== id.payload
                })
        },
    },
});

export const { add,remove}= formSlice.actions

export default formSlice.reducer
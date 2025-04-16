import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    chosenPoem: {}
}
const todoSlice = createSlice({
    name:"Todolist",
    initialState,
    reducers:{
        add: (state, {payload})=>{
            state.todos.push(payload)
        },
        deleteTodo:(state, {payload})=>{
            state.todos.filter((e)=> e.id !==payload.id)
        },
        poempicked: (state, {payload})=>{
            state.chosenPoem = payload
        }
    }
})
export const {add, deleteTodo, poempicked}= todoSlice.actions
export default todoSlice.reducer
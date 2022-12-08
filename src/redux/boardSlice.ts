import {createSlice} from "@reduxjs/toolkit"
import wordList from "../words.json"

const randomWord = Math.floor(Math.random() * wordList.words.length)
const initialState = {
    board: ["", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""],
    position: 0,
    row: 0,
    correctWord: wordList.words[randomWord].toUpperCase()

}
export const boardSlice = createSlice({
    name: "board", 
    initialState,
    reducers: {
    setBoard: (state, action) => {
        state.board = action.payload
    },
    incrementPosition : (state) => {
        state.position++;
    },
    decrementPosition : (state) => {
        state.position--;
    },
    setRow: (state) => {
        state.row++
    }
    }
})


export const {setBoard, incrementPosition, decrementPosition, setRow} = boardSlice.actions
export default boardSlice.reducer
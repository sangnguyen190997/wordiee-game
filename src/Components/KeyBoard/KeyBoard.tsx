import React from 'react'
import { rootState } from '../interface'
import Key from '../Key/Key'
import "./KeyBoard.css"
import {useSelector, useDispatch} from "react-redux"
import { decrementPosition, setBoard, setRow } from '../../redux/boardSlice'
import wordList from "../../words.json"

const KeyBoard:React.FC = () => {
    const position = useSelector((state:rootState) => state.board.position)
    const board = useSelector((state:rootState) => state.board.board)
    const row = useSelector((state:rootState) => state.board.row)
    const correctWord = useSelector((state:rootState) => state.board.correctWord)
    const dispatch = useDispatch()
    const rows:string[] = ["q w e r t y u i o p","a s d f g h j k l","z x c v b n m"]
    let board5Words = `${board[position -5]}${board[position -4]}${board[position -3]}${board[position -2]}${board[position -1]}`.toLowerCase()
    let allWords:string [] = wordList.words
   
    const chooseBack = () => {
        if((Math.floor(position - 1) / 5) < row) return;
        const newBoard = [...board]
        newBoard[position - 1] = ""
        dispatch(decrementPosition())
        dispatch(setBoard(newBoard))
    }

    const chooseEnter = () => {
        if(allWords.includes(board5Words) === false) {
            alert("Word is invalid")
        } 

        if(allWords.includes(board5Words)){
            if(position % 5 === 0 && position !== 0){
                dispatch(setRow())
            }
        } 

        if(position === 30 && allWords.includes(board5Words)){
            alert("The word is: " + correctWord)
        }
    }
  return (
    <div className='keyboard-container'>{rows.map((row, idx) => {
        return (
            <div className='row' key={idx}>
                {idx == 2 && <span className='letter-row' onClick={chooseEnter}>Enter</span>}
                {row.split(" ").map((letter, idx) => {
                    return (
                        <div className='letter-row' key={idx}>
                            <Key letter={letter.toUpperCase()}/>
                            {letter === "m" && <span onClick={chooseBack}>Back</span>}
                        </div>
                    )
                })}
            </div>
        )
    })}</div>
  )
}

export default KeyBoard
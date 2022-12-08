import React from 'react'
import "./Key.css"
import {useSelector, useDispatch} from "react-redux"
import { rootState } from '../interface'
import { incrementPosition, setBoard } from '../../redux/boardSlice'

interface IProps{
    letter:string
}
const Key:React.FC<IProps> = (props) => {
    const {letter} = props;
    const board = useSelector((state:rootState) => state.board.board)
    const position = useSelector((state:rootState) => state.board.position)
    const row = useSelector((state:rootState) => state.board.row)
    const currentPosition = Math.floor(position / 5)
    const dispatch = useDispatch();
    const chooseLetter = () => {
        if(position >= 30) return;
        if(currentPosition > row) return;
        let newLetter = [...board]
        newLetter[position] = letter
        dispatch(setBoard(newLetter))  
        dispatch(incrementPosition())
    }
  return (
    <div className='letter' onClick={chooseLetter}>{letter}</div>
  )
}

export default Key
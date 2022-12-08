import React, { Fragment, useState, useEffect } from 'react'
import "./Square.css"
import {motion} from "framer-motion"
import { useSelector,  } from 'react-redux'
import { rootState } from '../interface'

interface IProps {
    val: string,
    squareIdx: number
}
const Square:React.FC<IProps> = (props) => {
    const {val, squareIdx} = props
    const position = useSelector((state:rootState) => state.board.position)
    const correctWord = useSelector((state:rootState) => state.board.correctWord)
    const row = useSelector((state:rootState) => state.board.row)

    //State
    const [correct, setCorrect] = useState<Boolean>(false)
    const [almost, setAlmost] = useState<Boolean>(false)
    const [wrong, setWrong] = useState<Boolean>(false)

    let wordLastIndex = 4;
    let currentPosition = position === 5 ? wordLastIndex : position > 5 && position % 5 == 0 ? wordLastIndex : (position % 5) - 1
    const variants = {
        filled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            }
        }),
        unfilled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            }
        }),

    }

    useEffect(() => {
        if(correctWord[currentPosition] === val){
            setCorrect(true)
        } else if(!correct && val !== "" && correctWord.includes(val)){
            setAlmost(true)
        } else if(!correct && val !== "" && !correctWord.includes(val)){
            setWrong(true)
        }
        console.log(correctWord)
        return () => {
            setCorrect(false)
            setAlmost(false)
            setWrong(false)
        }
    },[val])

    const status: any = Math.floor(squareIdx / 5) < row && (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "")
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
        <div className='square' id={status}>{val}</div>
    </motion.div>
  )
}

export default Square
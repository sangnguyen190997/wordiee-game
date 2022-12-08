import React, { Fragment } from 'react'
import KeyBoard from '../KeyBoard/KeyBoard';
import Square from '../Square/Square';
import "./Board.css"

interface IProps {
    board: string []
}
const Board:React.FC<IProps> = (props) => {
    const {board} = props;
  return (
    <Fragment>
        <div className="board">
            {board.map((square, idx) => {
                return (
                    <Fragment key={idx}>
                        <Square val={square} squareIdx={idx}/>
                    </Fragment>
                )
            })}
        </div>
        <div className="keyboard">
            <KeyBoard />
        </div>
    </Fragment>
  )
}

export default Board
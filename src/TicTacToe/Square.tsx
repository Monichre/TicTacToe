import { FunctionComponent, useEffect, useState } from 'react'

import { Board } from './TicTacToe'
import { GridSquare } from './TicTacToe.style'

export interface SquareProps {
  board: Board
  coordinates: string
  onClick: (coordinates: string) => void
}

export const Square: FunctionComponent<SquareProps> = ({
  board,
  coordinates,
  onClick,
}) => {
  const [value, setValue] = useState(board[coordinates])

  const handleClick = () => {
    if (!value) {
      onClick(coordinates)
    }
  }
  useEffect(() => {
    setValue(board[coordinates])
  }, [board, coordinates])

  return (
    <GridSquare onClick={handleClick}>
      {value ? <h3>{value}</h3> : null}
    </GridSquare>
  )
}

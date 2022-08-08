import { Container, Game, Grid } from './TicTacToe.style'
import { FunctionComponent, useCallback, useEffect, useState } from 'react'

import { Square } from './Square'

export type Board = Record<string, string>

interface TicTacToeProps {}

export const TicTacToe: FunctionComponent<TicTacToeProps> = () => {
  const gameCoordinates = [
    '1:1',
    '1:2',
    '1:3',
    '2:1',
    '2:2',
    '2:3',
    '3:1',
    '3:2',
    '3:3',
  ]
  const freshBoard = gameCoordinates.reduce((acc: Board, curr: string) => {
    if (!acc[curr]) {
      acc[curr] = ''
    }
    return acc
  }, {})

  const [board, setBoard] = useState<Board>(freshBoard)
  const [turn, setTurn] = useState('X')
  const [winner, setWinner]: any = useState(null)

  const handleClick = (coordinates: string) => {
    setBoard({
      ...board,
      [coordinates]: turn,
    })
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const reset = () => {
    setBoard(freshBoard)
    setTurn('X')
    setWinner(null)
  }

  const checkWin = useCallback(() => {
    const winners = [
      ['1:1', '1:2', '1:3'],
      ['2:1', '2:2', '2:3'],
      ['3:1', '3:2', '3:3'],
      ['1:1', '2:2', '3:3'],
      ['1:3', '2:2', '3:1'],
      ['1:1', '2:1', '3:1'],
      ['1:2', '2:2', '3:2'],
      ['1:3', '2:3', '3:3'],
    ]
    const winningSet = (team: string) =>
      winners.find((winnerSet: string[]) =>
        winnerSet.every((coordinate) => board[coordinate] === team)
      )
    const xWon = winningSet('X')
    const oWon = winningSet('O')

    return xWon ? 'X' : oWon ? 'O' : false
  }, [board])

  useEffect(() => {
    const winningTeam = checkWin()
    if (winningTeam && !winner) {
      setWinner(winningTeam)
    }
  }, [board, checkWin, winner])

  if (winner) {
    return (
      <Container>
        <h1>Tic Tac Toe</h1>
        <div>
          <h2>{winner} won!</h2>
          <button onClick={reset}>Reset</button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <h2>Current Player: {turn}</h2>

      <Game>
        <Grid>
          {gameCoordinates.map((coordinates) => (
            <Square
              coordinates={coordinates}
              key={coordinates}
              onClick={handleClick}
              board={board}
            />
          ))}
        </Grid>
      </Game>
      <button onClick={reset}>Start Over</button>
    </Container>
  )
}

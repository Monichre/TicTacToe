import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: 64px;
    color: #78bec5;
  }

  button {
    margin-top: 48px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
`

export const Game = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`

export const GridSquare = styled.div`
  background-color: #78bec5;

  text-align: center;
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 200%;
  }
`

import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import React, { MouseEvent, KeyboardEvent, ChangeEvent } from 'react';
import { GameOver } from './components/GameOver';
import './App.css'
import image2 from "./family.png"
import title from "./quienes.jpg"
import win from "./win.jpeg"
import gameover from "./gameover.jpeg"
let random = Math.floor((Math.random() * 93) + 1)
export type evento = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>

function App() {
  type state = ({
    name: string;
    src: string;
  } | undefined)[]
  type Form = HTMLFormElement & { character: HTMLInputElement }
  const characters = useSelector<RootState, state>(state => state.characters)
  const [input, setInput] = React.useState("")
  const [gameOver, setGameOver] = React.useState(false)
  const [won, setWon] = React.useState<boolean | undefined>(undefined)
  const [isLoading, setIsLoading] = React.useState(false)
  const [lifes, setLifes] = React.useState(3)

  let character = characters[random]

  React.useEffect(() => {
    setIsLoading(false)

  }, [])

  function handleSubmit(e: React.FormEvent<Form>) {
    e.preventDefault()
    const { characterInput } = e.currentTarget
    let lifesCount = lifes
    setInput("")
    if (lifes > 0) {
      if (characterInput.value.toLowerCase() === character?.name.toLocaleLowerCase()) {
        setGameOver(true)
        setWon(true)

      } else {
        setLifes(lifes => lifes - 1)
        lifesCount -= 1
        if (lifesCount <= 0) {
          setGameOver(true)
          setWon(false)
        }
      }
    } else return
  }
  function handleRestart(e: evento) {
    setGameOver(false)
    setWon(undefined)
    setLifes(3)
    location.reload()
    setIsLoading(true)

  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  if (gameOver && won) {
    return (<GameOver onClick={handleRestart} characterName={character?.name} characterSrc={character?.src} image={win} />)
  }
  if (gameOver && won === false) {
    return <GameOver onClick={handleRestart} characterName={character?.name} characterSrc={character?.src} image={gameover} />
  }
  if (!gameOver && won === undefined) {
    return (
      <div className='bg-black flex flex-col items-center h-full  ' >
        <img className='h-28' src={title} alt="" />
        <div className='bg-image mt-4 mb-4 w-4/5 flex flex-col items-center justify-items-end rounded-lg  border-yellow-500 border-2' >
          {isLoading ? <img src={image2} className='w-80 h-80' /> : <img id='character' className={`w-80 h-80 ${gameOver ? "display" : "hidden-character"}`} src={character?.src} alt="" />}
        </div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={input} placeholder='nombre del personaje' name='characterInput' type="text" />
          <button className='bg-black border-yellow-500 p-1 shadow shadow-yellow-500 font-mono text-yellow-500 border-2 ml-2 hover:bg-yellow-500 hover:border-black hover:text-black' type='submit'>Enviar</button>
        </form>
        {lifes >= 2 ? <div className='font-mono  text-yellow-500'>Te quedan {lifes} intentos</div> : null}
        {lifes === 1 ? <div className='font-mono text-yellow-500'> Te queda {lifes} intento </div> : null}
        {lifes < 3 ? <div className=' font-mono text-yellow-500'>Tiene {character?.name.split(" ").length} palabra/s</div> : null}
        {lifes < 2 ? <div className=' font-mono text-yellow-500'>Comienza con {character?.name[0]} </div> : null}
        {gameOver ? <button className='bg-black border-yellow-500 p-1 shadow shadow-yellow-500 font-mono text-yellow-500 border-2 ml-2 hover:bg-yellow-500 hover:border-black hover:text-black' onClick={handleRestart}>Jugar de nuevo</button> : null}
      </div>
    )
  }
}
export default App

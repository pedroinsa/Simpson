import { evento } from '../App'
import "../App.css"
interface winProps {
    onClick: (e: evento) => void
    image: string
    characterName: string | undefined
    characterSrc: string | undefined
}
export const GameOver = ({ onClick, image, characterName, characterSrc }: winProps) => {
    return (
        <div className='bg-black flex flex-col items-center h-full'>
            <img className='mt-4 h-2/6 w-5/6' src={image} alt="" />

            <div className='flex flex-row'>
                <div className='text-yellow-500'>El personaje era {characterName}</div>
                <img className='h-28' src={characterSrc} alt="" />
            </div>
            <button onClick={onClick} className='absolute button-main mt-2 w-2/4 bg-black border-yellow-500 p-1 shadow shadow-yellow-500 font-mono text-yellow-500 border-2 ml-2 hover:bg-yellow-500 hover:border-black hover:text-black'>Restart</button>

        </div>
    )
}
